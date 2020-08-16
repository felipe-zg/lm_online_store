import reducer, {Creators, INITIAL_STATE} from '../../../src/store/ducks/products'

describe('Product duck', () => {
  it('FILL_PRODUCTS_LIST', () => {
    const PRODUCTS = [
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
      },
      {
        "id": 2,
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
    const state = reducer(INITIAL_STATE, Creators.fillProductsList(PRODUCTS))
    expect(state).toEqual(PRODUCTS)
  })
})
