import React from 'react'
import classes from '../BurgerIngredients/BurgerIngredients.css'

const BurgerIngredients = (props) => {

  let ingredients = null;
  
  
  switch (props.types) {
    case ('bread bottom'):
      ingredients = <div></div>
      break;
  
    default:
      break;
  }



  return (
    <div>
      
    </div>
  )
}

export default BurgerIngredients
