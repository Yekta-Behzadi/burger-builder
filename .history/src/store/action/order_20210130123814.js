import * as actionTypes from './actionsTypes'

export const purchaseBurgerSuccess = (id,orderData)=>{
  return{
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId:id,
    orderData : orderData
  }
}

export const purchaseBurgerFailed = () =>{
  return {
    type: actionTypes.
  }
}