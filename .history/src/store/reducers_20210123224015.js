import * as actionType from './actions';
import { stat } from 'fs-extra';

initialState={
  ingredients: {
    salad : 0,
    bacon: 0,
    cheese : 0,
    meat :0
  },
  totalPrice : 4,
}

const reducer =(state = initialState, action)=> {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return{
        ...state,
        ingredients:{
          ...state.ingredients,
          [action.ingredientName] : state.ingredients[action.ingredientName] + 1
        }
      }
      
      case actionType.REMOVE_INGREDIENT:
      return{

      };
    default : 
    return state

  }

}

export default reducer