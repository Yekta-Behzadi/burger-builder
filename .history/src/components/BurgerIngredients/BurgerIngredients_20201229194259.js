import React from 'react'
import classes from '../BurgerIngredients/BurgerIngredients.css'

const BurgerIngredients = (props) => {

  let ingredients = null;
  
  
  switch (props.types) {
    case ('bread-bottom'):
      ingredients = <div className={classes.BreadBottom} ></div>
      break;
  case('bread-top')
  
    default:
      break;
  }



  return (
    <div>
      
    </div>
  )
}

export default BurgerIngredients
