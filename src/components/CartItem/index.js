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
            <button type="button">Remover</button>
          }
          modal
          position="center center"
        >
          {close => (
            <Styled.Modal>
              <header>
                <h1>Tem certeza que deseja remover o produto do carrinho ?</h1>
              </header>

              <Styled.ModalActions>
                <button type="button" className="remove-buttom" onClick={handleRemoveItemFromCart}>Sim, remover</button>
                <button type="button" className="cancel-button" onClick={close}>Cancelar</button>
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
          <button type="button" onClick={handleDecreaseAmount}>-</button>
          <strong>{product.amount}</strong>
          <button type="button" onClick={handleIncreaseAmount}>+</button>
        </Styled.Amount>
        <p>subtotal: {subtotal}</p>
        {renderRemoveItemFromCartPopup()}
      </Styled.ProductActions>
    </Styled.CartItem>
  )
}

export default CartItem;
