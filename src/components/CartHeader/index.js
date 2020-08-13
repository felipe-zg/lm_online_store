import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cartIcon from '../../assets/images/svgs/cart.svg'
import './styles.css'


function CartHeader() {
  const cartItems = useSelector(state => state.Cart.items)

  function getCartProductsAmount(){
    return cartItems.reduce((total, item) => {
      return total + Number(item.amount);
    }, 0)
  }
  const productsAmount = getCartProductsAmount();
  return(
    <div id="cart">
      <h4>Carrinho - {productsAmount} produto(s)</h4>
      <div className="cart-link">
        <strong>{productsAmount}</strong>
        <Link to="/cart">
          <img src={cartIcon} alt="icone de um carrinho de compras" />
        </Link>
      </div>
    </div>
  )
}

export default CartHeader;
