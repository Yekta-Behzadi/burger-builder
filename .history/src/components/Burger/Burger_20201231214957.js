import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const burger = (props) => {

let transformedIngredients = Object.keys(props.ingredients).map((igKey) =>{
return [...Array(props.ingredients[igKey])].map((_, i) =>{
  return <BurgerIngredient key={igKey + i} types={igKey} />
} )
}cl ).reduce((arr,el) => {
  return arr.concat(el)
},[])

if (transformedIngredients.length === 0) {
  transformedIngredients = <p>Please Add Some ingredients!</p>
}
  return (
    <div className={classes.Burger} >
      <BurgerIngredient types='bread-top' />
     {transformedIngredients}
      <BurgerIngredient types='bread-bottom' />
      
    </div>
  )
}

export default burger
