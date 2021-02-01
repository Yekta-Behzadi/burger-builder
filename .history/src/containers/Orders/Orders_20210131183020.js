import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
import spinner from '../../components/UI/Spinner/Spinner'
class Orders extends Component {
  
componentDidMount(){
  this.props.onfetchOrders()
}

  render() {
    let orders = <Spinner/>
    if (!this.props.loading) {
      
    }
    return (
      <div>
        {this.props.orders.map(order =>(
          <Order key={order.id} 
          ingredients ={order.ingredients}
          price={order.price} />
    ))}

      </div>
    )
  }
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
