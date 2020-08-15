import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cartIcon from '../../assets/images/svgs/cart.svg'

import * as Styled from './styles'


function CartHeader() {
  const cartItems = useSelector(state => state.Cart.items)

  function getCartProductsAmount(){
    return cartItems.reduce((total, item) => {
      return total + Number(item.amount);
    }, 0)
  }
  const productsAmount = getCartProductsAmount();
  return(
    <Styled.CartHeader>
      <h4>Carrinho - {productsAmount} produto(s)</h4>
      <Styled.CartLink>
        <strong>{productsAmount}</strong>
        <Link to="/cart">
          <img src={cartIcon} alt="icone de um carrinho de compras" />
        </Link>
      </Styled.CartLink>
    </Styled.CartHeader>
  )
}

export default CartHeader;
