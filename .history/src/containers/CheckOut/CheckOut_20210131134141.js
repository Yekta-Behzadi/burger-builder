import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'
import * as actions from '../../store/action/index'


class CheckOut extends Component {




// state ={
//   ingredients : null,
//   price: 0
// }
// componentWillMount (){
//   const query = new URLSearchParams(this.props.location.search)
//   const ingredients = {}
//   let price = 0;
//   for (let param of query.entries()) {
//     // ['salad','1']
//     if (param[0] === 'price') {
//       price = param[1];
//   } else {
//       ingredients[param[0]] = +param[1];
//   }
//   }
//   this.setState({ingredients : ingredients, totalPrice: price})

// }

checkoutCancelledHandler = () =>{
this.props.history.goBack();
}
checkoutContinuedHandler =() =>{
this.props.history.replace('/checkout/contact-data')
}
  render() {
    let summary = <Redirect to='/'/>
    if (this.props.ings) {
      const purchaseRedirect =this.props.purchased ? <Redirect to ='/'/> : null
      summary = (
        <div>
          {purchaseRedirect}
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
purchased : state.order.purchased
  }
}


export default connect (mapStateToProps) (CheckOut)
