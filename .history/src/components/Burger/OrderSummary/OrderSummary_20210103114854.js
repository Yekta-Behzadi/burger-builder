import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
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
      <p>Continue to Check Out?</p>
      <Button clicked ={}
      btnType='Danger' >Cancel</Button>
      <Button clicked ={} >Continue</Button>

      </Aux>
  )
}

export default OrderSummary
