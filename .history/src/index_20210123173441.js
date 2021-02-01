import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'redux'
import {createStore} from 'react-redux'

const app = (
<Router> <App /> </Router>
)

ReactDOM.render(
 app, document.getElementById('root')
);

