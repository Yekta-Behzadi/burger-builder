import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionType from '../../store/actions';


const INGREDIENTS_PRICE = {
  salad : 0.5,
  cheese : 0.4,
  meat : 1.3,
  bacon: 0.7
}


 class BurgerBuilder extends Component {

state = {
  ingredients:null,
  totalPrice : 4,
  perchaseabel: false,
  perchasing: false,
  loading: false,
  error : false
}
componentDidMount(){

//   axios.get('https://react-my-burger-b7c4d-default-rtdb.firebaseio.com/ingredients.json')
//   .then(response => {this.setState({ingredients : response.data})})
//   .catch(err => {
// this.setState({error : true})
//   })
}

updatePerchaseState (ingredients){
  
  const sum = Object.keys(ingredients)
  .map(igkey =>{
    return ingredients[igkey]
  } ).reduce((sum,el)=>{
    return sum + el
  },0)
  this.setState({perchaseabel : sum > 0 })
} 




addIngredientHandler = (type) =>{
  const oldCount = this.state.ingredients[type];
  const updatedCount = oldCount + 1 ;
  const updatedIngredients = {
    ...this.state.ingredients } ; 
  updatedIngredients[type] = updatedCount;
  const priceAddition = INGREDIENTS_PRICE[type]
  const oldPrice = this.state.totalPrice
  const newPrice = oldPrice + priceAddition
  this.setState({totalPrice : newPrice , ingredients : updatedIngredients} );
this.updatePerchaseState(updatedIngredients)
}

removeIngredientHandler = (type) =>{
  const oldCount = this.state.ingredients[type];
  if (oldCount <= 0 ) {
    return;
  }
  const updatedCount = oldCount -1;
  const updatedIngredients = {...this.state.ingredients};
  updatedIngredients[type] = updatedCount ;
  const priceDeducted = INGREDIENTS_PRICE[type] ;
  const oldPrice = this.state.totalPrice ;
  const newPrice = oldPrice - priceDeducted ;
  this.setState({totalPrice: newPrice , ingredients: updatedIngredients});
  this.updatePerchaseState(updatedIngredients)

}

perchaseHandler = () =>{
  this.setState({perchasing :true })
}

purchaseCancelHandler = ()=>{
  this.setState({perchasing :false })

}
perchaseContinueHandler = () =>{
  console.log(this.props)

  const queryIngredients = [];

  for (let i in this.state.ingredients) {
   queryIngredients.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
  }
  queryIngredients.push('price='+this.state.totalPrice);
const queryIngredientsString = queryIngredients. join('&')
  const { history } = this.props;
  history.push({
    pathname: '/checkout',
    search:'?'+ queryIngredientsString
  })
}

  render() {

let disabeledInfo = {
  ...this.props.ings
}
for (let key in disabeledInfo) {
 disabeledInfo[key] = disabeledInfo[key] <= 0
}

// spinner
let orderSummary = null;

let burger = this.state.error ? <p> Ingredients can't be loaded</p> : <Spinner/>
if (this.props.ings) {
  burger = (
    <Aux>
  <Burger ingredients={this.state.ingredients} />
  <BuildControls ingredientAdded={this.addIngredientHandler} 
   ingredientDeducted={this.removeIngredientHandler}
   disabeled = {disabeledInfo}
   price={this.state.totalPrice}
   perchaseabel = {this.state.perchaseabel}
   ordered = {this.perchaseHandler} />
   </Aux>
   );
   orderSummary = <OrderSummary 
   ingredients={this.state.ingredients} 
   purchaseCancelled={this.purchaseCancelHandler}
   purchaseContinued = {this.perchaseContinueHandler}
   price={this.state.totalPrice.toFixed(2)} />
}
if (this.state.loading) {
  orderSummary = <Spinner/>
}
    return (
   
   <Aux>
     <Modal show={this.state.perchasing} 
     modalClosed={this.purchaseCancelHandler} >
       {orderSummary}
     </Modal>
     {burger}
    </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings : state.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded :(ingName)=> dispatch({type : actionType.ADD_INGREDIENT , ingredientName: ingName}),
    onIngredientRemoved :(ingName)=> dispatch({type : actionType.REMOVE_INGREDIENT , ingredientName: ingName})

  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler (BurgerBuilder,axios))

// export default withErrorHandler (BurgerBuilder,axios)
