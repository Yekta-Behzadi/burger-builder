import React, { Component } from 'react'
import Layout from './'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout></Layout>
<BurgerBuilder/>
        
      </div>
    )
  }
}



export default App