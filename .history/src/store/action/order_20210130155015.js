import * as actionTypes from './actionsTypes'
import axios from '../../axios-order'

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


export const purchaseBurgerStart = ()=>{
  return{
    type : 
  }
}


export const purchaseBurger =(orderData) =>{
  return dispatch => {
    axios.post("/orders.json", orderData)
    .then((response) => {
      console.log(response.data)
     dispatch(purchaseBurgerSuccess(response.data, id))
    })
    .catch((error) => dispatch(purchaseBurgerFailed(error)));
  }
}