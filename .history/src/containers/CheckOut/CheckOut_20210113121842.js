import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
 class CheckOut extends Component {
  render() {
    return (
      <div>
        <CheckOutSummary ingredients={this.state.ingre} />
      </div>
    )
  }
}

export default CheckOut
