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
  const oldCount = this.state.ingredients[type];
  const updatedCount = oldCount + 1 ;
  const updatedIngredients = {
    ...this.state.ingredients } ; 
  updatedIngredients[type] = updatedCount;
  const priceAddition = INGREDIENTS_PRICE[type]
  const oldPrice = this.state.totalPrice
  const newPrice = oldPrice + priceAddition
  this.setState({totalPrice : newPrice , ingredients : updatedIngredients} )

}

removeIngredientHandler = (type) =>{
  const oldCount = this.state.ingredients[type];
  if (oldCount <= 0 ) {
    return;
  }
  const updatedCount = oldCount -1;
  const updatedIngredients = {...this.state.ingredients};
  updatedIngredients[type] = updatedCount ;
  const priceDeducted = INGREDIENTS_PRICE[type] ;
  const oldPrice = this.state.totalPrice ;
  const newPrice = oldPrice - priceDeducted ;
  this.setState({totalPrice: newPrice , ingredients: updatedIngredients})
}

  render() {
let disabeledInfo = {
  ...this.state.ingredients
}
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    
  }
}

    return (
   
   <Aux>
   <Burger ingredients={this.state.ingredients} />
    <BuildControls ingredientAdded={this.addIngredientHandler} 
     ingredientDeducted={this.removeIngredientHandler} />
    </Aux>
    )
  }
}

export default BurgerBuilder
