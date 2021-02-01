import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
 
class CheckOut extends Component {
state ={
  ingredients : {
    salad:1,
    cheese:1,
    bacon:1,
    meat: 1
  }
}
componentDidMount
  render() {
    console.log(props)
    return (
      <div>
        <CheckOutSummary ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default CheckOut
