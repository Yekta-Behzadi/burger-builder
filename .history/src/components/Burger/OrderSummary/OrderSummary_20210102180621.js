import React from 'react'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys( props.ingredients)
  .map(())
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>

      </ul>
    </>
  )
}

export default OrderSummary
