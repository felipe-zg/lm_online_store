import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaskedInput from 'react-input-mask'

import { formatNumberToCurrency } from '../../utils/formater';
import { calculateCartSubtotal, calculateCartTotal } from '../../utils/calculator';

import {Creators as CartActions} from '../../store/ducks/Cart'

import Header from '../../components/Header'
import CartItem from '../../components/CartItem'

import boxIcon from '../../assets/images/svgs/box.svg'

import './styles.css'

function Cart() {
  const cart = useSelector(state => state.Cart)
  const [zipCode, setZipCode] = useState('')
  const dispatch = useDispatch()

  const renderCartItems = () => {
    return cart.items.map(cartProduct => <CartItem product={cartProduct} key={cartProduct.info.id}/>)
  }

  const onZipCodeChange = (value) => {
    setZipCode(value)
  }

  const handleCalculateFreight = () => {
    dispatch(CartActions.asyncCalculateFreight(zipCode))
  }

  const freight = formatNumberToCurrency(cart.freight)
  const calculatedSubtotal = calculateCartSubtotal(cart.items)
  const Subtotal = formatNumberToCurrency(calculatedSubtotal)
  const total = formatNumberToCurrency(
                    calculateCartTotal(calculatedSubtotal, Number(cart.freight))
                  )

  return(
    <div id="cart-container">
      <header>
        <Header title="Carrinho"/>
      </header>

      {cart.items.length === 0 && (
        <div id="empty-cart">
          <div>
            <img src={boxIcon} alt="imagem de uma caixa vazia"/>
            <h2>Carrinho vazio</h2>
          </div>
        </div>
      )}
      {cart.items.length > 0 && (
        <>
          <main>
            <div className="cart-items">
              {renderCartItems()}
            </div>
          </main>

          <main>
            <div className="checkout-info">
              <div>
                <h2>Frete:</h2>
                <div className="freight-info">
                  <MaskedInput
                    mask="99999999"
                    placeholder="00000000"
                    value={zipCode}
                    onChange={e => onZipCodeChange(e.target.value)}
                  />
                  <button type="button"
                        disabled={zipCode.replace(/_/g, "").length < 8}
                        className="calculate-freight-button"
                        onClick={handleCalculateFreight}
                  >
                    <p>Calcular</p>
                  </button>
                </div>
                <h2>Subtotal: <span>{Subtotal}</span></h2>
                <h2>Frete: <span>{freight}</span></h2>
                <h2>Total: <span>{total}</span></h2>
                <button type="button" className="checkout-button"><p>Finalizar</p></button>
              </div>
            </div>
          </main>
        </>
      )}

    </div>
  )
}

export default Cart;
