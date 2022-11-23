import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux'

import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = legacy_createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
     <App />
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// import { configureStore } from '@reduxjs/toolkit'