import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const burger = (props) => {

transformedIngredients = Object.keys(props.ingredients).map(ig)

  return (
    <div className={classes.Burger} >
      <BurgerIngredient types='bread-top' />
      <BurgerIngredient types='cheese' />
      <BurgerIngredient types='meat' />
      <BurgerIngredient types='salad' />
      <BurgerIngredient types='bacon' />
      <BurgerIngredient types='bread-bottom' />
      
    </div>
  )
}

export default burger
