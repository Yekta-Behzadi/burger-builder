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
  .then(res=>{
    this.setState({la})
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
