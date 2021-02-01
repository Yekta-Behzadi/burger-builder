import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from 'axios'

class Orders extends Component {
  state ={
    orders: [],
    loading:true
  }
componentDidMount(){
  axios.get('/orders.json')
  const fetchOrders = []
  for (const key in res.data) {
    f
  }
  .then(res=>{
    this.setState({loading:false})
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
