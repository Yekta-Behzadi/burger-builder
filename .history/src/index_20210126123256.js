import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware, compose} from 'redux'
import reducer from './store/reducers'

const logger = store =>{
  return next =>{
    return action =>{
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
}


const store = createStore(reducer, applyMiddleware());

const app = (
  <Provider store={store} >
<Router> <App /> </Router>
</Provider>
)

ReactDOM.render(
 app, document.getElementById('root')
);

