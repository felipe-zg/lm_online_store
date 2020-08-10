# API
Aqui você encontrará um guia básico de como usar as API de **produto** e **frete**.

---

**Frete**
----
  Retorna o valor do frete.

* **URL**

  `
  https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/freight/{cep}
  `

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `cep=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
      {
        "freight": "10.00"
      }
    ```

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** <br />
    ```json
    {
      "error": "invalid parameter for zipcode. Only accepts (00000-000) or (00000000) format"
    }
    ```

**Produtos**
----
  Retorna uma lista de produtos.

* **URL**

  `
  https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products
  `

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
      [
        {
          "id": 1,
          "name": "Furadeira de Impacto",
          "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
          "price": {
            "to": {
              "integers": "965",
              "decimals": "90"
            },
            "from": {
              "integers": "299",
              "decimals": "99"
            },
          },
          "unit": "cada",
          "installments": {
            "amount": 8,
            "value": "120,74"
          },
          "tag": {
           "label": "Exclusivo" 
          },
          "offer": {
            "label": "Oferta",
            "value": 11
          },
          "url": "https://www.leroymerlin.com.br/"
        }
      ]
    ```

