import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
 
class CheckOut extends Component {
state ={
  
}
  render() {
    return (
      <div>
        <CheckOutSummary ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default CheckOut
