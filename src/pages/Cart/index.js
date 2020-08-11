import React from 'react';

import Header from '../../components/Header'
import CartItem from '../../components/CartItem'

function Cart() {
  return(
    <div id="cart-container">
      <header>
        <Header title="Carrinho"/>
      </header>
      <main>
        <CartItem />
        <CartItem />
        <CartItem />
      </main>
    </div>
  )
}

export default Cart;
