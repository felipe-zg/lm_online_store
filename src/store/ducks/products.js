import {createActions, createReducer} from 'reduxsauce'
import {produce} from 'immer'

export const {Types, Creators} = createActions({
  asyncFillProductsList: [],
  fillProductsList: ['products']
})


export const INITIAL_STATE = []

const fill = (state = INITIAL_STATE, action) =>{
  return produce(state, draft => {
    if(draft.length === 0){
      draft.push(...action.products)
    }
  })
}

export default createReducer(INITIAL_STATE, {
  [Types.FILL_PRODUCTS_LIST]: fill,
})
