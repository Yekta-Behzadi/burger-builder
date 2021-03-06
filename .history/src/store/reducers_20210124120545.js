import * as actionType from './actions';

const initialState={
  ingredients: {
    salad : 0,
    bacon: 0,
    cheese : 0,
    meat :0
  },
  totalPrice : 4,
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
      return{
        ...state,
        ingredients:{
          ...state.ingredients,
          [action.ingredientName] : state.ingredients[action.ingredientName] + 1
        },
        totalPrice : th
      }
      
      case actionType.REMOVE_INGREDIENT:
        return{
          ...state,
          ingredients:{
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] - 1
          }
        }
    default : 
    return state

  }

}

export default reducer