import React from 'react';

import './styles.css'

const product = {
  "id": 1,
  "name": "Furadeira de Impacto",
  "picture": "https://img.kalunga.com.br/FotosdeProdutos/301037d.jpg",
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


function Product() {
  return(
    <div id="product">
      <img src={product.picture} alt="imagem do produto"/>
      <h2>{product.name}</h2>
      <footer>
        <button type="button">
          <p>Adicionar ao carrinho</p>
        </button>
        <div className="product-prices">
          <strong>R$ {product.price.to.integers},{product.price.to.decimals}
            <span> {product.unit}</span>
          </strong>
          <p className="product-installment">{product.installments.amount}X de R${product.installments.value} s/ juros</p>
        </div>
      </footer>
    </div>
  )
}

export default Product;
