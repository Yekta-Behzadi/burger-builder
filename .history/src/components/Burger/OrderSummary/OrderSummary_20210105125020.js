import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  
  render(){
    const ingredientSummary = Object.keys( this.props.ingredients)
  .map((igkey)=>{
    return (<li key={igkey} >
       <span className={{textTransform: 'capitlize'}} >{igkey}</span>: {this.props.ingredients[igkey]} 
        </li>)
  })
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
          {ingredientSummary}
        </ul>
        <p> <strong> Total Price: {this.props.price} </strong> </p>
        <p>Continue to Check Out?</p>
        <Button clicked ={ this.props.purchaseCancelled}
        btnType='Danger' >Cancel</Button>
        <Button clicked ={this.props.purchaseContinued}
        btnType='Success' >Continue</Button>
  
        </Aux>
    )
  }
  
}

export default OrderSummary
