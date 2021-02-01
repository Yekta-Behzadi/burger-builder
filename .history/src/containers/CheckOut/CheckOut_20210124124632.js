import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'

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
const mapStateToProps = state =>{
  return {
ings : state.ingredients,
price
  }
}

const mapDispatchToProps = dispatch =>{
  return {

  }
}

export default connect (mapStateToProps, mapDispatchToProps) (CheckOut)