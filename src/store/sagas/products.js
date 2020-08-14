import {takeLatest, put, all, call} from 'redux-saga/effects'
import {AsyncStorage} from 'AsyncStorage'

import Api from '../../services/api'

function* fillProductsList(){
  const products = yield AsyncStorage.getItem('products')
  if(products) {
    yield put({type: 'FILL_PRODUCTS_LIST', products: JSON.parse(products)})
    return
  }
  const response = yield call(Api.get, `/products`)
  yield put({type: 'FILL_PRODUCTS_LIST', products: response.data})
  yield AsyncStorage.setItem('products', JSON.stringify(response.data))
}

export default  all([
  takeLatest('ASYNC_FILL_PRODUCTS_LIST', fillProductsList)
])
