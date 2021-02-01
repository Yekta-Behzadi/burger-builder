import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import { Route } from 'react-router-dom';
 
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
componentDidMount (){
  const query = new URLSearchParams(this.props.location.search)
  const ingredients = {}
  for (let param of query.entries()) {
    // ['salad','1']
    ingredients[param[0]] = +param[1]
  }
  this.setState({ingredients : ingredients})

}
  render() {

    return (
      <div>
        <CheckOutSummary 
        ingredients={this.state.ingredients} 
        checkOutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'} />
      </div>
    )
  }
}

export default CheckOut
