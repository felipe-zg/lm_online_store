import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ToastContainer} from 'react-toastify'

import {store, persistor} from './store'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer pauseOnFocusLoss={false}/>
      <Routes/>
    </PersistGate>
  </Provider>
)

export default App
