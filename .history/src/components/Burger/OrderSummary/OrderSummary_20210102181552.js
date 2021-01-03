import React from 'react'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys( props.ingredients)
  .map((igkey)=>{
    return (<li>
       <span className={{textTransform: 'capitlize'}} >{igkey}</span>: {props.ingredients[igkey]} 
        </li>)
  })
  return (
    <A
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Check Out?</p>
  
  )
}

export default OrderSummary
