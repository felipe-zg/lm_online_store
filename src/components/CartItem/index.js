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

function CartItem() {
  return(
    <div id="cart-item">
      <img src={product.picture} alt="imagem do produto" />
      <div className="product-info">
        <p>{product.name}</p>
        <p>R${product.price.to.integers},{product.price.to.integers}<span> {product.unit}</span></p>
      </div>
      <div className="product-cart-info">
        <p>- 1 +</p>
        <p>subtotal:</p>
      </div>
    </div>
  )
}

export default CartItem;
