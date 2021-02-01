import * as actionType from '../action/actionsTypes'

const initialState ={
  orders :[],
  loading : false
}


const reducer = (state= initialState, action) =>{
  switch (action.type) {
    case actionType.PURCHASE_INIT:
      return
case actionType.PURCHASE_BURGER_START:
  return {
    ...state,
    loading: true
  }

    case actionType.PURCHASE_BURGER_SUCCESS:
        
    const newOrder = {
      ...action.orderData,
      id: action.orderId
    }

      return{...state,
            loading : false,
             orders: state.orders.concat(newOrder)
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