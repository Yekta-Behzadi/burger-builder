import * as actionTypes from './actionsTypes'
import axios from '../'

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

export const purchaseBurgerStart =(orderData) =>{
  return dispatch => {
    axios.post("/orders.json", orderData)
    .then((response) => {
      this.setState({ loading: false });
      this.props.history.push("/");
    })
    .catch((error) => this.setState({ loading: false }));
  }
}