import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './'
const app = (
  <Provider>
<Router> <App /> </Router>
</Provider>
)

ReactDOM.render(
 app, document.getElementById('root')
);

