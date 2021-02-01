import React from 'react'
import classes from './Order.css'
function Order(props) {
  return (
    <div className={classes.Order} >
      <p>Ingredients: {props.ingredients} </p>
  <p>Price : <strong>USD{}</strong></p>
    </div>
  )
}

export default Order
