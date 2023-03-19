import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './global.css'

const defaultState = {
  count: 0,
}

const reducer = (state = defaultState, action) => {

  switch(action.type){
    case "PLUS_COUNT":
      return {...state, count: state.count + action.countChange};

    case "MINUS_COUNT":
      return {...state, count: state.count - action.countChange};
      
    case "ZERO_COUNT":
      return {...state, count: 0};

    default:
      return state;
  }

}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
);

