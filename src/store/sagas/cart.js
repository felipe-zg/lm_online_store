import {takeLatest, put, all, call, select} from 'redux-saga/effects'
import {toast} from 'react-toastify'

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


    toast.warning('Esse produto já estava no seu carrinho, aumentamos a quantidade dele pra você :)')

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

    toast.success('Produto adicionado ao carrinho')

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

function* asyncRemoveProduct(action){
  yield put({type: 'REMOVE_PRODUCT', id: action.id})
  toast.error('Produto removido do carrinho')
}

function* asyncIncreaseProductAmount(action){
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

function* asyncDecreaseProductAmount(action){
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

function* asyncCalculateFreight(action){
  try {
    const response = yield call(Api.get, `/freight/${action.zipCode}`)
    yield put(
      {
          type: 'CALCULATE_FREIGHT',
          freightValue : response.data.freight
      }
    )
  }catch(e){
    toast.error('Erro ao calcular o frete')
  }
}

export default  all([
  takeLatest('ASYNC_ADD_PRODUCT', asyncAddProduct),
  takeLatest('ASYNC_REMOVE_PRODUCT', asyncRemoveProduct),
  takeLatest('ASYNC_INCREASE_PRODUCT_AMOUNT', asyncIncreaseProductAmount),
  takeLatest('ASYNC_DECREASE_PRODUCT_AMOUNT', asyncDecreaseProductAmount),
  takeLatest('ASYNC_CALCULATE_FREIGHT', asyncCalculateFreight),
])
