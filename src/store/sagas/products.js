import {takeLatest, put, all, call} from 'redux-saga/effects'

import Api from '../../services/api'

function* fillProductsList(){
  const response = yield call(Api.get, `/products`)
  yield put({type: 'FILL_PRODUCTS_LIST', products: response.data})
}

export default  all([
  takeLatest('ASYNC_FILL_PRODUCTS_LIST', fillProductsList)
])
