import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  return (
    <div className={classes.Burger} >
      <BurgerIngredient types='bread-top' />
      <BurgerIngredient types='cheese' />
      <BurgerIngredient types='meat' />
      <BurgerIngredient type='salad' />
      <BurgerIngredient type='bacon' />
      <BurgerIngredient type='bread-bottom' />
      
    </div>
  )
}

export default burger
