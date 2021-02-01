import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {
state ={
  ingredients : null,
  price: 0
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
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
       
     
    )
  }
}

export default CheckOut
