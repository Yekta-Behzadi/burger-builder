import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary = (props) => {
  const ingredientSummary = Object.keys( props.ingredients)
  .map((igkey)=>{
    return (<li key={igkey} >
       <span className={{textTransform: 'capitlize'}} >{igkey}</span>: {props.ingredients[igkey]} 
        </li>)
  })
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

export default OrderSummary
