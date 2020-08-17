import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

import logoIcon from '../../assets/images/svgs/logo.svg'
import boxIcon from '../../assets/images/svgs/box.svg'

import {Creators as CartActions} from '../../store/ducks/cart'

import { formatNumberToCurrency } from '../../utils/formater';
import { calculateCartSubtotal, calculateCartTotal } from '../../utils/calculator';

import Header from '../../components/Header'
import CartItem from '../../components/CartItem'

import * as Styled from './styles'

function Cart() {
  const cart = useSelector(state => state.Cart)

  const [zipCode, setZipCode] = useState('')

  const dispatch = useDispatch()

  const freight = formatNumberToCurrency(cart.freight)
  const calculatedSubtotal = calculateCartSubtotal(cart.items)
  const Subtotal = formatNumberToCurrency(calculatedSubtotal)
  const total = formatNumberToCurrency(
                    calculateCartTotal(calculatedSubtotal, Number(cart.freight)))

  const handleCheckout = () =>
    cart.freight === '0'?
      toast.error('Calcule o frete antes de finalizar a comprar'):
      dispatch(CartActions.cleanCart())


  const renderCartItems = () => cart.items.map(cartProduct => <CartItem product={cartProduct} key={cartProduct.info.id}/>)

  const handleCalculateFreight = () => dispatch(CartActions.asyncCalculateFreight(zipCode))

  const onZipCodeChange = (value) => setZipCode(value)


  return(
    <Styled.Cart>
      <header>
        <Header title="Carrinho">
          <Styled.HomeLink>
            <Link to="/">
              <img src={logoIcon} alt="imagem da logo da leroy merlin" />
            </Link>
          </Styled.HomeLink>
        </Header>
      </header>

      {cart.items.length === 0 && (
        <Styled.EmptyCart>
          <div>
            <img src={boxIcon} alt="imagem de uma caixa vazia"/>
            <h2>Carrinho vazio</h2>
          </div>
        </Styled.EmptyCart>
      )}
      {cart.items.length > 0 && (
        <>
          <main>
            <Styled.CartItems>
              {renderCartItems()}
            </Styled.CartItems>
          </main>

          <main>
            <Styled.CheckoutInfo>
              <div>
                <h2>Frete:</h2>
                <Styled.FreightInfo>
                  <Styled.ZipcodeInput
                    mask="99999999"
                    placeholder="00000000"
                    value={zipCode}
                    onChange={e => onZipCodeChange(e.target.value)}
                  />
                  <Styled.CalculateFreightButton type="button"
                        disabled={zipCode.replace(/_/g, "").length < 8}
                        className="calculate-freight-button"
                        onClick={handleCalculateFreight}
                  >
                    Calcular
                  </Styled.CalculateFreightButton>
                </Styled.FreightInfo>
                <h2>Subtotal: <span>{Subtotal}</span></h2>
                <h2>Frete: <span>{freight}</span></h2>
                <h2>Total: <span>{total}</span></h2>
                <Styled.CheckoutButton type="button" className="checkout-button" onClick={handleCheckout}>
                  Finalizar
                </Styled.CheckoutButton>
              </div>
            </Styled.CheckoutInfo>
          </main>
        </>
      )}

    </Styled.Cart>
  )
}

export default Cart;
