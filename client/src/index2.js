import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux'

import thunk from 'redux-thunk'
import Reducers from './reducers'
import App2 from './App2';
import { DarkModeContextProvider } from './Community/context/darkModeContext';
import { AuthContextProvider } from './Community/context/AuthContext';

const store = legacy_createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>

     <AuthContextProvider>
      <DarkModeContextProvider>
        <App2 />
      </DarkModeContextProvider>
     </AuthContextProvider>

   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// import { configureStore } from '@reduxjs/toolkit'


// below <App />
