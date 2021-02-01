import * as actionType from '../action/actionsTypes'

const initialState ={
  orders :[],
  loading : false
}


const reducer = (state= initialState, action) =>{
  switch (action.type) {
    case actionType.PURCHASE_BURGER_SUCCESS:
      return{}
      
      case actionType.PURCHASE_BURGER_FAILED:
        return{}
  
    default:
      return state
      break;
  }

}


export de