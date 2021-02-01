import * as actionType from './actionsTypes'

export const addIngredient = (name) =>{
  return {
    type : actionType.ADD_INGREDIENT,
    ingredientName : name
  }
}

export const removeIngredient = (name) => {
  return {
    type : actionType.REMOVE_INGREDIENT,
    ingredientName : name
  }
}

export const setIngredients = (ingredients) =>{
  return {
    type: actionType.SET_INGREDIENTS
  }
}

export const fetchIngredients = () => {
  return dispatch => {

  }
}