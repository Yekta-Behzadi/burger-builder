import * as actionType from '../action/actionsTypes'

const initialState ={
  orders :[],
  loading : false
}


const reducer = (state= initialState, action) =>{
  switch (action.type) {
    case actionType.PURCHASE_BURGER_SUCCESS:
        
    const newOrder = {
      ...action.orderData,
      id: action.orderId
    }

      return{...state,
            loading : false,
             orders: new
                    }
      
      case actionType.PURCHASE_BURGER_FAILED:
        return{
          ...state,
        }
  
    default:
      return state
      break;
  }

}


export default reducer