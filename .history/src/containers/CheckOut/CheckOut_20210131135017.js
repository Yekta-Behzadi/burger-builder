import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'

class CheckOut extends Component {


checkoutCancelledHandler = () =>{
this.props.history.goBack();
}
checkoutContinuedHandler =() =>{
this.props.history.replace('/checkout/contact-data')
}
  render() {
    let summary = <Redirect to='/'/>
    if (this.props.ings) {
      summary = (
        <div>
          <CheckOutSummary 
      ingredients={this.props.ings}
      checkoutCancelled={this.checkoutCancelledHandler}
      checkoutContinued={this.checkoutContinuedHandler} />
      <Route 
      path={this.props.match.path + '/contact-data'} 
      component={ContactData}
      // render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.props.price} {...props} />)}
      />
        </div>
      
      )
    }

    return (
     
           {summary}     
    )
  }
}
const mapStateToProps = state =>{
  return {
ings : state.burgerReducer.ingredients,
purchased: state.order.purchased
}
}



export default connect (mapStateToProps) (CheckOut)
