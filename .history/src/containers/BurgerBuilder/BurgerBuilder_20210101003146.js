import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'



const INGREDIENTS_PRICE = {
  salad : 0.5,
  cheese : 0.4,
  meat : 1.3,
  bacon: 0.7
}


 class BurgerBuilder extends Component {

state = {
  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0,
   
  },
  totalPrice : 4
}
addIngredientHandler = (type) =>{
  const oldCount = this.state.ingredients[type]
  const updatedCount = oldCount +1
  const updatedIngredients = {...this.state.ingredients}
  updatedIngredients[type] = updatedCount
  I
}

removeIngredientHandler = () =>{
  
}

  render() {
    return (
   
   <Aux>
   <Burger ingredients={this.state.ingredients} />
    <BuildControls/>
    </Aux>
    )
  }
}

export default BurgerBuilder
