import * as actionType from './actionsTypes'
import axios from '../../axios-order'



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
    type: actionType.SET_INGREDIENTS,
    ings: ingredients
  }
}

export const fetchIngredients = () => {
  return dispatch => {
    axios.get('https://react-my-burger-b7c4d-default-rtdb.firebaseio.com/ingredients.json')
      .then(response => {this.setState({ingredients : response.data})})
      .catch(err => {
    this.setState({error : true})
      })
  }
}