import React from 'react';
import { useDispatch } from 'react-redux';
import { formatNumberToCurrency } from '../../utils/formater';

import {Creators as ProductActions} from '../../store/ducks/cart'

import './styles.css'

function CartItem({product}) {
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(ProductActions.removeProduct(product.info.id))
  }

  const handleIncreaseAmount = () => {
    dispatch(ProductActions.asyncIncreaseProductAmount(product.info.id))
  }

  const handleDecreaseAmount = () => {
    dispatch(ProductActions.asyncDecreaseProductAmount(product.info.id))
  }

  const subtotal = formatNumberToCurrency(product.subtotal)

  return(
    <div id="cart-item">
      <img src={product.info.picture} alt="imagem do produto" />
      <div className="product-info">
        <p>{product.info.name}</p>
        <strong>R${product.info.price.to.integers},{product.info.price.to.decimals}<span> {product.info.unit}</span></strong>
      </div>
      <div className="product-checkout-info">
        <div className="product-ammount">
          <button type="button" onClick={handleDecreaseAmount}>
            <p>-</p>
          </button>
          <strong>{product.amount}</strong>
          <button type="button" onClick={handleIncreaseAmount}>
            <p>+</p>
          </button>
        </div>
        <p>subtotal: {subtotal}</p>
        <button type="button" onClick={handleRemoveItemFromCart}>
          <p>Remover</p>
        </button>
      </div>
    </div>
  )
}

export default CartItem;
