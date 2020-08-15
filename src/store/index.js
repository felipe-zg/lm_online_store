import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './ducks'
import rootSaga from './sagas/rootSaga'

const persistConfig = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers)


const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export {store, persistor}
