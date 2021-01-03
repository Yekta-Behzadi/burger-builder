import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

 class BurgerBuilder extends Component {

state = {
  ingredients:{
    salad:1,
    bacon:1,
    
  }
}

  render() {
    return (
   
   <Aux>
   <Burger/>
    <div>
      Burger Controls
    </div>
    </Aux>
    )
  }
}

export default BurgerBuilder
