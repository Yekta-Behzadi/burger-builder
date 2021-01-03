import React from 'react'
import classes from '../BurgerIngredients/BurgerIngredients.css'

const BurgerIngredients = (props) => {

  let ingredients = null;
  
  
  switch (props.types) {
    case ('bread-bottom'):
      ingredients = <div className={classes.BreadBottom} ></div>
      break;

  case('bread-top') :
  ingredients = <div className={classes.BreadTop} >
    <div className={classes.Seeds1} ></div>
    <div className={classes.Seeds2} ></div>

  </div>
  break;

  case('meat'):
ingredients = <div className={classes.Meat} ></div>
  break;

  case('meat'):
  ingredients = <div className={classes.Meat} ></div>
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
