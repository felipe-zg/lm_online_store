import React from 'react'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'

import store from './store'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css'

const App = () => (
  <Provider store={store}>
    <ToastContainer pauseOnFocusLoss={false}/>
    <Routes/>
  </Provider>
)

export default App
