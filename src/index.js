import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  filter: null,
  stocks: {
    mostActive: {
      isFetching: true,
      didInvalidate: false,
      items: [],
    },
    mostGainer: {
      isFetching: true,
      didInvalidate: false,
      items: [],
    },
    mostLosers: {
      isFetching: true,
      didInvalidate: false,
      items: [],
    },
  },
  searchedStock: {
    isFetching: true,
    didInvalidate: false,
    items: [],
  },
};

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
