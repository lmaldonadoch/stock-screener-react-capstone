import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
