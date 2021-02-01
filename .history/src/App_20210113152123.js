import React, { Component } from 'react'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {LRoutink, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Link exact path='/' component = {BurgerBuilder} />
          <Link  to='/checkout' component = {CheckOut} />
          </Switch>
          </Layout>
      </div>
    )
  }
}



export default App