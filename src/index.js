import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import setupSocket from './sockets'
import reducers from './reducers'
import username from './utils/name'
import handleNewMessage from './sagas'
import App from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
