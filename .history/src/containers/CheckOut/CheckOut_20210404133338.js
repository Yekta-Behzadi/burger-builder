import React from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'



const CheckOut = (props) => {

 const checkoutCancelledHandler = () =>{
  props.history.goBack();
}
  const  checkoutContinuedHandler =() =>{
    props.history.replace('/checkout/contact-data');
    }


    let summary = <Redirect to='/'/>
    if (props.ings) {
      const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
      summary = (
        <div>
        {purchasedRedirect}
          <CheckOutSummary 
      ingredients={props.ings}
      checkoutCancelled={checkoutCancelledHandler}
      checkoutContinued={checkoutContinuedHandler} />
      <Route 
      path={props.match.path + '/contact-data'} 
      component={ContactData}
      />
        </div>
      
      )
    }
  return (
    summary 
  )
}

const mapStateToProps = state =>{
  return {
ings : state.burgerReducer.ingredients,
purchased: state.order.purchased
}
}



export default connect (mapStateToProps) (CheckOut)

