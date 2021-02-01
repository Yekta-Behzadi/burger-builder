import React, { Component } from 'react'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {}
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
<BurgerBuilder/>
<CheckOut/>
</Layout>
      </div>
    )
  }
}



export default App