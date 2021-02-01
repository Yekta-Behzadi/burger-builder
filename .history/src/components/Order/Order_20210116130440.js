import React from 'react'
import classes from './Order.css'

function Order(props) {
  const Ingredients =[]
  for(let ingredientName in Ingredients){
    Ingredients.push({
      name:ingredientName,
      amount:props.ingredients[ingredientName]
    })
  }
  const ingredientOutPut = ingredients.map(ing=>{
    return(
      <span style = {{textTransform : 'capitalize',
    display:'inline-block',
  margin:}}
      key={ing.name} > {ing.name} ({ing.amount}) </span>
    )
  })
  return (
    <div className={classes.Order} >
      <p>Ingredients: {ingredientOutPut}  </p>
  <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order
