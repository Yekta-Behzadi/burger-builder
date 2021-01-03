import React, { Component } from 'react'
import aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

 class BurgerBuilder extends Component {
  render() {
    return (
   
   <aux>
   <Burger/>
    <div>
      Burger Controls
    </div>
    </aux>
    )
  }
}

export default BurgerBuilder
