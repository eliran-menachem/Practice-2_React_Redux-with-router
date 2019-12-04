import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {reducerUsers} from './store/reducer/reducerUsers';
import {reducerAccounts} from './store/reducer/reducerAccounts';
import {combineReducer} from 'redux';

const rootReducer = combineReducer({
    usr:reducerUsers,
    acc:reducerAccounts
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
