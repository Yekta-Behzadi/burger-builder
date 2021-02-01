import React from 'react'
import classes from './Order.css'
function Order(props) {
  return (
    <div className={classes.Order} >
      <p>Ingredients: {props.ingredient} </p>
      <p>Price : <strong>USD 5.45</strong></p>
    </div>
  )
}

export default Order
