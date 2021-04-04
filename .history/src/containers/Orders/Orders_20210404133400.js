import React, {  useEffect } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
import Spinner from '../../components/UI/Spinner/Spinner'



const Orders = (props) => {

  useEffect(() => {
    props.onfetchOrders()
  }, [])

  let orders = <Spinner/>

      if (!props.loading) {
        orders =props.orders.map(order =>(
            <Order key={order.id} 
            ingredients ={order.ingredients}
            price={order.price} />
      ))
      }
  return (
    <div>
      {orders}
    </div>
  )
}

const mapStateToProps = state =>{
  return{
orders: state.order.orders,
loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch =>{
return{
  onfetchOrders : ()=>dispatch(actions.fetchOrders())
}
}


export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler (Orders,axios))


