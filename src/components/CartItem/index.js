import React from 'react';

import './styles.css'

function CartItem({product}) {
  return(
    <div id="cart-item">
      <img src={product.item.picture} alt="imagem do produto" />
      <div className="product-info">
        <p>{product.item.name}</p>
        <strong>R${product.item.price.to.integers},{product.item.price.to.integers}<span> {product.item.unit}</span></strong>
      </div>
      <div className="product-checkout-info">
        <div className="product-ammount">
          <button type="button"><p>+</p></button>
          <strong>{product.amount}</strong>
          <button type="button"><p>+</p></button>
        </div>
        <p>subtotal:</p>
        <button type="button"><p>Remover</p></button>
      </div>
    </div>
  )
}

export default CartItem;
