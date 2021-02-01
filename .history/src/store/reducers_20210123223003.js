import * as actionType from './actions';

initialState={
  ingredients:null,
  totalPrice : 4,
}

const reducer =(state = initialState, action)=> {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return{

      }
      
      case actionType.REMOVE_INGREDIENT:
      return{

      };
  
  
      return state
    
  }
}

export const reducer