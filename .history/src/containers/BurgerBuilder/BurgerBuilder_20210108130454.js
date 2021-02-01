import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from 'axios'



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
  totalPrice : 4,
  perchaseabel: false,
  perchasing: false
}

updatePerchaseState (ingredients){
  
  const sum = Object.keys(ingredients)
  .map(igkey =>{
    return ingredients[igkey]
  } ).reduce((sum,el)=>{
    return sum + el
  },0)
  this.setState({perchaseabel : sum > 0 })
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
  this.setState({totalPrice : newPrice , ingredients : updatedIngredients} );
this.updatePerchaseState(updatedIngredients)
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
  this.setState({totalPrice: newPrice , ingredients: updatedIngredients});
  this.updatePerchaseState(updatedIngredients)

}

perchaseHandler = () =>{
  this.setState({perchasing :true })
}

purchaseCancelHandler = ()=>{
  this.setState({perchasing :false })

}
perchaseContinueHandler = () =>{
  // alert('You continue')
  const order = {
    ingredients : this.state.ingredients,
    price: this.state.totalPrice,
    customer : {
      name: "Yekta Behzadi",
      address : {
        street : 'TestStreet',
        zipCode : "41351",
        country :"Ger"
      }
    }
  }
  axios.get('/orders.json')
}

  render() {
let disabeledInfo = {
  ...this.state.ingredients
}
for (let key in disabeledInfo) {
 disabeledInfo[key] = disabeledInfo[key] <= 0
}

    return (
   
   <Aux>
     <Modal show={this.state.perchasing} modalClosed={this.purchaseCancelHandler} >
       <OrderSummary 
       ingredients={this.state.ingredients} 
       purchaseCancelled={this.purchaseCancelHandler}
       purchaseContinued = {this.perchaseContinueHandler}
       price={this.state.totalPrice.toFixed(2)} />
     </Modal>
   <Burger ingredients={this.state.ingredients} />
    <BuildControls ingredientAdded={this.addIngredientHandler} 
     ingredientDeducted={this.removeIngredientHandler}
     disabeled = {disabeledInfo}
     price={this.state.totalPrice}
     perchaseabel = {this.state.perchaseabel}
     ordered = {this.perchaseHandler} />
    </Aux>
    )
  }
}

export default BurgerBuilder
