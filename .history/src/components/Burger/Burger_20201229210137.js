import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
  return (
    <div className={classes.Burger} >
      <BurgerIngredient type='bread-' />
      
    </div>
  )
}

export default Burger
