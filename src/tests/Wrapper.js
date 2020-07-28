import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>{children}</BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
};

export default Wrapper;
