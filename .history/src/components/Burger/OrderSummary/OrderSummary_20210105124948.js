import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  
  
  render(){
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
          {ingredientSummary}
        </ul>
        <p> <strong> Total Price: {props.price} </strong> </p>
        <p>Continue to Check Out?</p>
        <Button clicked ={ props.purchaseCancelled}
        btnType='Danger' >Cancel</Button>
        <Button clicked ={props.purchaseContinued}
        btnType='Success' >Continue</Button>
  
        </Aux>
    )
  }
  
}

export default OrderSummary
