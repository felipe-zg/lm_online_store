import {all} from 'redux-saga/effects'
import cart from './cart';
import Products from './products'

export default function* rootSaga() {
    return yield all([cart, Products]);
}
