import * as actionType from '../action/actionsTypes';
import {updateObject} from '../utility'
const initialState={
  ingredients: null,
  totalPrice : 4,
  error : false
}

const INGREDIENTS_PRICE = {
  salad : 0.5,
  cheese : 0.4,
  meat : 1.3,
  bacon: 0.7
}

const reducer =(state = initialState, action)=> {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      const updatedIngredient = {[action.ingredientName] : state.ingredients[action.ingredientName] + 1};
      const updatedIngredients = updateObject(state.ingredients);
      const updatedState = {
        ingredients : updatedIngredients
      }
      return{
        ...state,
        ingredients:{
          ...state.ingredients,
          [action.ingredientName] : state.ingredients[action.ingredientName] + 1
        },
        totalPrice : state.totalPrice +INGREDIENTS_PRICE[action.ingredientName]
      }
      
      case actionType.REMOVE_INGREDIENT:
        return{
          ...state,
          ingredients:{
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] - 1
          }
        }
        case actionType.SET_INGREDIENTS : 
        return{
          ...state,
          ingredients : action.ings,
          error:false,
          totalPrice :4
        }
        case actionType.FETCH_INGREDIENT_FAILED : 
        return{
          ...state,
          error : true
        }
    default : 
    return state

  }

}

export default reducer