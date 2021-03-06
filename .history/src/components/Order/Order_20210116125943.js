import React from 'react'
import classes from './Order.css'

function Order(props) {
  const Ingredients =[]
  for(let ingredientName in Ingredients){
    Ingredients.push({amount:props.ingredientName})
  }
  return (
    <div className={classes.Order} >
      <p>Ingredients:  </p>
  <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order
