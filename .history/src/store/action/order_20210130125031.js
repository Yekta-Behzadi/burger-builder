import * as actionTypes from './actionsTypes'

export const purchaseBurgerSuccess = (id,orderData)=>{
  return{
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId:id,
    orderData : orderData
  }
}

export const purchaseBurgerFailed = (error) =>{
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error

  }
}

export const 