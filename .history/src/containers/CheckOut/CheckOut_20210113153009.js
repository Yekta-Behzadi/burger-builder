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
checkOutCancellHandler = () =>{
this.props.history.goBack()
}
checkOutContinueHandler =() =>{
this.props.history.replace('/checkout/')
}
  render() {

    return (
      <div>
        <CheckOutSummary 
        ingredients={this.state.ingredients} 
        checkOutCancelled ={this.checkOutCancellHandler}
        checkOutContinued={this.checkOutContinueHandler} />
      </div>
    )
  }
}

export default CheckOut
