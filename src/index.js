import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import configureStore from './redux/store';
import '@babel/polyfill';
import './style.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
