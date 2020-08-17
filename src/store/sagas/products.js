import {takeLatest, put, all, call, select} from 'redux-saga/effects'

import Api from '../../services/api'

function* fillProductsList(){
  const productsListLength = yield select(state => state.Products.length)
  if(productsListLength > 0) return
  const response = yield call(Api.get, `/products`)
  yield put({type: 'FILL_PRODUCTS_LIST', products: response.data})
}

export default  all([
  takeLatest('ASYNC_FILL_PRODUCTS_LIST', fillProductsList)
])
