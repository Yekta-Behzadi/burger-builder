import React from 'react'
import classes from './Order.css'
function Order(props) {
  return (
    <div className={classes.Order} >
      <p>Ingredients: {props.ingredients} </p>
  <p>Price : <strong>USD{props.price.to}</strong></p>
    </div>
  )
}

export default Order
