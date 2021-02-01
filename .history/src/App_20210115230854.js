import React, { Component } from 'react'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route exact path='/' component = {BurgerBuilder} />
          <Route path = '/order' component
          <Route  path='/checkout' component = {CheckOut} />
          </Switch>
          </Layout>
      </div>
    )
  }
}



export default App