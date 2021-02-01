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
    type : actionTypes.PURCHASE_BURGER_START
  }
}


export const purchaseBurger =(orderData) =>{
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios.post("/orders.json", orderData)
    .then((response) => {
      console.log(response.data)
     dispatch(purchaseBurgerSuccess(response.data.name, orderData))
    })
    .catch((error) =>{
       dispatch(purchaseBurgerFailed(error))
      });
  }
}

export const purchaseInit = () =>{
  return {
    type : actionTypes.PURCHASE_INIT
  }
}

export const fetchOrderSuccess = (orders) =>{
  return{
    type: actionTypes.FETCH_ORDERS_START,
    orders: orders
  }
}

export const fetchOrderd