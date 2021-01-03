import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const burger = (props) => {

const transformedIngredients = Object.keys(props.ingredients).map((igKey) =>{
return [...Array(props.ingredients[igKey])].map((_, i) =>{
  return <BurgerIngredient key={igKey + i} types={igKey} />
} )
} ).reduce(() => {
  ret
},[])

  return (
    <div className={classes.Burger} >
      <BurgerIngredient types='bread-top' />
     {transformedIngredients}
      <BurgerIngredient types='bread-bottom' />
      
    </div>
  )
}

export default burger
