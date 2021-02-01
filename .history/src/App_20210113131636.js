import React, { Component } from 'react'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Link to />
<BurgerBuilder/>
<CheckOut/>
</Layout>
      </div>
    )
  }
}



export default App