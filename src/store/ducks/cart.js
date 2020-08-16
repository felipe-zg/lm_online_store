import {createActions, createReducer} from 'reduxsauce'
import {produce} from 'immer'

export const {Types, Creators} = createActions({
  asyncAddProduct: ['product'],
  asyncRemoveProduct: ['id'],
  asyncIncreaseProductAmount: ['id'],
  asyncDecreaseProductAmount: ['id'],
  asyncCalculateFreight: ['zipCode'],
  addProduct: ['product', 'amount', 'subtotal'],
  removeProduct: ['id'],
  increaseProductAmount: ['id', 'amount', 'subtotal'],
  decreaseProductAmount: ['id', 'amount', 'subtotal'],
  calculateFreight: ['freightValue'],
  cleanCart: [],
})


export const INITIAL_STATE = {items: [], freight: '0'}

const add = (state = INITIAL_STATE, action) =>{
  return produce(state, draft => {
    draft.items.push({ info: action.product, amount: action.amount , subtotal: action.subtotal})
  })
}

const remove = (state = INITIAL_STATE, action) =>{
  return produce(state, draft => {
    const productIndex = draft.items.findIndex(
      product => product.info.id === action.id
    )
    if(productIndex >=0){
      draft.items.splice(productIndex, 1)
    }
  })
}

const updateAmount = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    const productIndex = draft.items.findIndex(
      product => product.info.id === action.id
    )
    draft.items[productIndex].amount = action.amount
    draft.items[productIndex].subtotal = action.subtotal
  })
}

const calculateFreight = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    draft.freight = action.freightValue
  })
}

const clean = (state = INITIAL_STATE, action) => INITIAL_STATE


export default createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: add,
  [Types.REMOVE_PRODUCT]: remove,
  [Types.INCREASE_PRODUCT_AMOUNT]: updateAmount,
  [Types.DECREASE_PRODUCT_AMOUNT]: updateAmount,
  [Types.CALCULATE_FREIGHT]: calculateFreight,
  [Types.CLEAN_CART]: clean,
})
