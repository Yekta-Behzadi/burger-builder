import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from 'axios'
import withErrorHandler from '../../hoc/'
class Orders extends Component {
  state ={
    orders: [],
    loading:true
  }
componentDidMount(){
  axios.get('/orders.json')
  
  .then(res=>{
    const fetchOrders = []
  for (let key in res.data) {
    fetchOrders.push({...res.data[key],
    id:key})
  }
    this.setState({loading:false,orders : fetchOrders})
  })
  .catch(err=>{
    this.setState({loading:false})
  })
}

  render() {
    return (
      <div>
        <Order/>
        <Order/>

      </div>
    )
  }
}

export default Orders
