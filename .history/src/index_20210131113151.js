import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import burgerBuilderReducer from './store/reducer/burgerBuilder'
import thunk from 'redux-thunk'
import orderReducer from './store/reducer/order'


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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(burgerBuilderReducer, composeEnhancers (applyMiddleware(logger,thunk)));

const app = (
  <Provider store={store} >
<Router> <App /> </Router>
</Provider>
)

ReactDOM.render(
 app, document.getElementById('root')
);

