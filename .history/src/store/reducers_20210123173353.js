import * as actionType from './actions';

initialState={

}

const reducer =(state = initialState, action)=> {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return{

      }
      
      case actionType.REMOVE_INGREDIENT:
      return{

      };
  
    default:
      return{
        state
      }
  }
}

export const reducer