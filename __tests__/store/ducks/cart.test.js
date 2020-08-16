import reducer, {Creators, INITIAL_STATE} from '../../../src/store/ducks/cart'

describe('Cart duck', () => {

  const STATE_WITH_PRODUCT = {
    items: [
      {
        info: {
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
        amount: 1,
        subtotal: '299.99'
      }
    ],
    freight: '0'
  }

  it('ADD_PRODUCT', () => {
    const PRODUCT = {
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
    const state = reducer(INITIAL_STATE, Creators.addProduct(PRODUCT, 1 , '299.99'))
    expect(state).toEqual(STATE_WITH_PRODUCT)
  })

  it('REMOVE_PRODUCT', () => {
    const state = reducer(STATE_WITH_PRODUCT, Creators.removeProduct(1))
    expect(state).toEqual(INITIAL_STATE)
  })

  it('INCREAsE_PRODUCT_AMOUNT', () => {
    const CURRENT_STATE = {
      items: [
        {
          info: {
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
          amount: 1,
          subtotal: '299.99'
        }
      ],
      freight: '0'
    }
    const NEW_STATE = {
      items: [
        {
          info: {
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
          amount: 2,
          subtotal: '599.98'
        }
      ],
      freight: '0'
    }
    const state = reducer(CURRENT_STATE, Creators.increaseProductAmount(1, 2, '599.98'))
    expect(state).toEqual(NEW_STATE)
  })

  it('DECREASE_PRODUCT_AMOUNT', () => {
    const CURRENT_STATE = {
      items: [
        {
          info: {
            "id": 1,
          "name": "Furadeira de Impacto",
          "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
          "price": {
            "to": {
              "integers": "965",
              "decimals": "90"
            },
            "from": {
              "integers": "200",
              "decimals": "00"
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
          amount: 5,
          subtotal: '1000.00'
        }
      ],
      freight: '0'
    }
    const NEW_STATE = {
      items: [
        {
          info: {
            "id": 1,
          "name": "Furadeira de Impacto",
          "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
          "price": {
            "to": {
              "integers": "965",
              "decimals": "90"
            },
            "from": {
              "integers": "200",
              "decimals": "00"
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
          amount: 4,
          subtotal: '800.00'
        }
      ],
      freight: '0'
    }
    const state = reducer(CURRENT_STATE, Creators.decreaseProductAmount(1, 4, '800.00'))
    expect(state).toEqual(NEW_STATE)
  })

  it('CLEAN_CART', () => {
    const CURRENT_STATE = {
      items: [
        {
          info: {
            "id": 1,
          "name": "Furadeira de Impacto",
          "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
          "price": {
            "to": {
              "integers": "965",
              "decimals": "90"
            },
            "from": {
              "integers": "200",
              "decimals": "00"
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
          amount: 5,
          subtotal: '1000.00'
        },
        {
          info: {
            "id": 2,
            "name": "Furadeira de Impacto",
            "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
            "price": {
              "to": {
                "integers": "965",
                "decimals": "90"
              },
              "from": {
                "integers": "200",
                "decimals": "00"
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
          amount: 5,
          subtotal: '1000.00'
        },
        {
          info: {
            "id": 3,
            "name": "Furadeira de Impacto",
            "picture": "https://cdn.leroymerlin.com.br/products/0.jpg",
            "price": {
              "to": {
                "integers": "965",
                "decimals": "90"
              },
              "from": {
                "integers": "200",
                "decimals": "00"
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
          amount: 5,
          subtotal: '1000.00'
        }
      ],
      freight: '0'
    }
    const state = reducer(CURRENT_STATE, Creators.cleanCart())
    expect(state).toEqual(INITIAL_STATE)
  })

  it('CALCULATE_FREIGHT', () => {
    const NEXT_STAE = {
      items: [],
      freight: '10.00'
    }
    const stae = reducer(INITIAL_STATE, Creators.calculateFreight('10.00'))
    expect(stae).toEqual(NEXT_STAE)
  })
})
