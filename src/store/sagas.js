import {all} from 'redux-saga/effects'
import cart from './ducks/sagas';

export default function* rootSaga() {
    return yield all([cart]);
}
