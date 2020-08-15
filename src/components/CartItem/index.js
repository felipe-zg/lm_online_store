import React from 'react';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup'

import { formatNumberToCurrency } from '../../utils/formater';
import {Creators as ProductActions} from '../../store/ducks/cart'

import * as Styled from './styles'

function CartItem({product}) {
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(ProductActions.asyncRemoveProduct(product.info.id))
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
            <Styled.Modal>
              <header>
                <h1>Tem certeza que deseja remover o produto do carrinho ?</h1>
              </header>

              <Styled.ModalActions>
                <button type="button" className="remove-buttom" onClick={handleRemoveItemFromCart}>
                  <p>Sim, remover</p>
                </button>
                <button type="button" className="cancel-button" onClick={close}>
                  <p>Cancelar</p>
                </button>
              </Styled.ModalActions>
            </Styled.Modal>
          )}
        </Popup>
    )
  }

  return(
    <Styled.CartItem>
      <img src={product.info.picture} alt="imagem do produto" />
      <Styled.ProductInfo>
        <p>{product.info.name}</p>
        <strong>R${product.info.price.to.integers},{product.info.price.to.decimals}<span> {product.info.unit}</span></strong>
      </Styled.ProductInfo>
      <Styled.ProductActions>
        <Styled.Amount>
          <button type="button" onClick={handleDecreaseAmount}>
            <p>-</p>
          </button>
          <strong>{product.amount}</strong>
          <button type="button" onClick={handleIncreaseAmount}>
            <p>+</p>
          </button>
        </Styled.Amount>
        <p>subtotal: {subtotal}</p>
        {renderRemoveItemFromCartPopup()}
      </Styled.ProductActions>
    </Styled.CartItem>
  )
}

export default CartItem;
