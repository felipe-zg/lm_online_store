import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header'
import CartItem from '../../components/CartItem'

import './styles.css'

function Cart() {
  const cartItems = useSelector(state => state.Cart)

  const renderCartItems = () => {
    return cartItems.map(item => <CartItem product={item}/>)
  }
  return(
    <div id="cart-container">
      <header>
        <Header title="Carrinho"/>
      </header>
      <main>
        <div className="cart-items">
          {cartItems && renderCartItems()}
        </div>
      </main>
    </div>
  )
}

export default Cart;
