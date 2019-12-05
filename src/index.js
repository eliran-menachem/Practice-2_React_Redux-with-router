import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import reducerUsers from './store/reducer/reducerUsers';
import reducerAccounts from './store/reducer/reducerAccounts';


const rootReducer = combineReducers({
  usr: reducerUsers,
  acc: reducerAccounts 
})

const store = createStore(rootReducer,{},applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
