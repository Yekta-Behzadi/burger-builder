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
checkoutCancelledHandler = () =>{
this.props.history.goBack();
}
checkoutContinuedHandler =() =>{
this.props.history.replace('/checkout/contact-data')
}
  render() {

    return (
      <div>
        <CheckOutSummary 
        ingredients={this.state.ingredients} 
        checkoutCancelled={()=> {this.checkoutCancelledHandler}}
        checkoutContinued={this.checkoutContinuedHandler}/>
      </div>
    )
  }
}

export default CheckOut
