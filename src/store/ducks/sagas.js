import {takeLatest, put, all, call, select} from 'redux-saga/effects'

import Api from '../../services/api'
import { calculateCartItemSubtotal } from '../../utils/calculator';

function* asyncAddProduct(action) {
  const isProductAlreadyInCart = yield select( state =>
      state.Cart.items.find(product => product.info.id === action.product.id)
    );
  if(isProductAlreadyInCart){
    const amount = isProductAlreadyInCart.amount + 1
    const subtotal = yield calculateCartItemSubtotal(
      isProductAlreadyInCart.info.price.to.integers,
      isProductAlreadyInCart.info.price.to.decimals,
      amount
    )
    yield put(
        {
            type: 'INCREASE_PRODUCT_AMOUNT',
            id: action.product.id,
            amount,
            subtotal
        }
      )
  } else {
    const subtotal = yield calculateCartItemSubtotal(
      action.product.price.to.integers,
      action.product.price.to.decimals,
      1
    )
    yield put(
        {
          type: 'ADD_PRODUCT',
          product: action.product,
          amount: 1,
          subtotal
        }
      )
  }
}

function* increaseProductAmount(action){
  const productInCart = yield select( state =>
    state.Cart.items.find(product => product.info.id === action.id)
  );

  if(productInCart.amount < 10){
    const amount = productInCart.amount + 1
    const subtotal = yield calculateCartItemSubtotal(
      productInCart.info.price.to.integers,
      productInCart.info.price.to.decimals,
      amount
    )
    yield put(
      {
          type: 'INCREASE_PRODUCT_AMOUNT',
          id: action.id,
          amount,
          subtotal
      }
    )
  }
}

function* decreaseProductAmount(action){
  const productInCart = yield select( state =>
    state.Cart.items.find(product => product.info.id === action.id)
  );

  if(productInCart.amount > 1){
    const amount = productInCart.amount - 1
    const subtotal = yield calculateCartItemSubtotal(
      productInCart.info.price.to.integers,
      productInCart.info.price.to.decimals,
      amount
    )
    yield put(
      {
          type: 'DECREASE_PRODUCT_AMOUNT',
          id: action.id,
          amount,
          subtotal
      }
    )
  }
}

function* calculateFreight(action){
  try {
    const response = yield call(Api.get, `/freight/${action.zipCode}`)
    console.log(response)
    console.log(response.data.freight)
    yield put(
      {
          type: 'CALCULATE_FREIGHT',
          freightValue : response.data.freight
      }
    )
  }catch(e){
    console.log('erro ao calcular o frete')
  }
}

export default  all([
  takeLatest('ASYNC_ADD_PRODUCT', asyncAddProduct),
  takeLatest('ASYNC_INCREASE_PRODUCT_AMOUNT', increaseProductAmount),
  takeLatest('ASYNC_DECREASE_PRODUCT_AMOUNT', decreaseProductAmount),
  takeLatest('ASYNC_CALCULATE_FREIGHT', calculateFreight)
])
