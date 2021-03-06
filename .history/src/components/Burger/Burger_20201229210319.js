import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
  return (
    <div className={classes.Burger} >
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='salad' />
      <BurgerIngredient type='bacon' />
      <BurgerIngredient type='bread-top' />

      <BurgerIngredient type='bread-bottom' />
      
    </div>
  )
}

export default Burger
