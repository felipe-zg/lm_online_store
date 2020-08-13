import React from 'react';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup'

import { formatNumberToCurrency } from '../../utils/formater';
import {Creators as ProductActions} from '../../store/ducks/Cart'

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

  const renderRemoveItemFromCartPopup = () => {
    return (
      <Popup
          trigger={
            <button type="button">
              <p>Remover</p>
            </button>
          }
          modal
          className="popup"
        >
          {close => (
            <div className="modal">
              <header>
                <h1>Tem certeza que deseja remover o produto do carrinho ?</h1>
              </header>

              <div className="actions">
                <button type="button" className="remove-buttom" onClick={handleRemoveItemFromCart}>
                  <p>Sim, remover</p>
                </button>
                <button type="button" className="cancel-buttom" onClick={close}>
                  <p>Cancelar</p>
                </button>
              </div>
            </div>
          )}
        </Popup>
    )
  }

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
        {renderRemoveItemFromCartPopup()}
      </div>
    </div>
  )
}

export default CartItem;
