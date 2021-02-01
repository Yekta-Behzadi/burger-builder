import * as actionType from './actionsTypes'

export const addIngredient = (name) =>{
  return {
    type : actionType.ADD_INGREDIENT,
    ingredientName : ingName
  }
}

export const removeIngredient = () => {
  return {
    type : actionType.REMOVE_INGREDIENT,
    ingredientName : ingName
  }
}