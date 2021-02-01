import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
class Orders extends Component {
  
componentDidMount(){
  this.props.onfetchOrders()
}

  render() {
    return (
      <div>
        {this.state.orders.map(order =>(
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
orders: state.order.
loading: 
  }
}

const mapDispatchToProps = dispatch =>{
return{
  onfetchOrders : ()=>dispatch(actions.fetchOrders())
}
}


export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler (Orders,axios))
