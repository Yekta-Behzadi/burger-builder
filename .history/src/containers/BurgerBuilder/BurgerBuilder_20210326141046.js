import React, { useState, useEffect} from 'react'
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
import * as actions from '../../store/action/index';



const BurgerBuilder = (props) => {
  const [perchaseabel, setPerchaseabel] = useState(false);
  const [perchasing, setPerchasing] = useState(false)

useEffect(() => {
  props.onfetchIngredients()
}, [])

const updatePerchaseState =()=>{
  const sum = Object.keys(props.ings)
  .map(igkey =>{
    return props.ings[igkey]
  } ).reduce((sum,el)=>{
    return sum + el
  },0)
  return sum > 0
  // this.setState({perchaseabel : sum > 0 })
} 
const perchaseHandler = () =>{
  setPerchasing(true)
}

const purchaseCancelHandler = ()=>{
  setPerchasing(false)

}
const perchaseContinueHandler = () =>{
  props.onInitPurchase()
  props.history.push('/checkout')
}

  let disabeledInfo = {...props.ings}
  for (let key in disabeledInfo) {
   disabeledInfo[key] = disabeledInfo[key] <= 0
  }
  
  // spinner
  let orderSummary = null;
  
  let burger = props.error ? <p> Ingredients can't be loaded</p> : <Spinner/>
  if (props.ings) {
    burger = (
      <Aux>
    <Burger ingredients={props.ings} />
    <BuildControls ingredientAdded={props.onIngredientAdded} 
     ingredientDeducted={props.onIngredientRemoved}
     disabeled = {disabeledInfo}
     price={props.price}
     perchaseabel = {updatePerchaseState()}
     ordered = {perchaseHandler} />
     </Aux>
     );
     orderSummary = <OrderSummary 
     ingredients={props.ings} 
     purchaseCancelled={purchaseCancelHandler}
     purchaseContinued = {perchaseContinueHandler}
     price={props.price.toFixed(2)} />
  }
  return (
    <Aux>
      <Modal show={perchasing} 
      modalClosed={purchaseCancelHandler} >
        {orderSummary}
      </Modal>
      {burger}
     </Aux>
     )
}


const mapStateToProps = state => {
  //   return {
  //     ings : state.burgerReducer.ingredients,
  //     price : state.burgerReducer.totalPrice,
  //     error : state.burgerReducer.error
  //   }
  // }
  
  
  // const mapDispatchToProps = dispatch => {
  //   return {
  //     onIngredientAdded :(ingName)=> dispatch(actions.addIngredient(ingName)),
  //     onIngredientRemoved :(ingName)=> dispatch(actions.removeIngredient(ingName)),
  //     onfetchIngredients : ()=> dispatch(actions.fetchIngredients()),
  //     onInitPurchase : () => dispatch(actions.purchaseInit())
  //   }
  // }
  
connect(mapStateToProps,mapDispatchToProps) (withErrorHandler (BurgerBuilder,axios))

//  class BurgerBuilder extends Component {

// state = {
//   perchaseabel: false,
//   perchasing: false,
//   //loading: false,
//   //error : false
// }
// componentDidMount(){
// this.props.onfetchIngredients()

// }

// updatePerchaseState (){
  
//   const sum = Object.keys(this.props.ings)
//   .map(igkey =>{
//     return this.props.ings[igkey]
//   } ).reduce((sum,el)=>{
//     return sum + el
//   },0)
//   return sum > 0
//   // this.setState({perchaseabel : sum > 0 })
// } 




// // addIngredientHandler = (type) =>{
// //   const oldCount = this.state.ingredients[type];
// //   const updatedCount = oldCount + 1 ;
// //   const updatedIngredients = {
// //     ...this.state.ingredients } ; 
// //   updatedIngredients[type] = updatedCount;
// //   const priceAddition = INGREDIENTS_PRICE[type]
// //   const oldPrice = this.state.totalPrice
// //   const newPrice = oldPrice + priceAddition
// //   this.setState({totalPrice : newPrice , ingredients : updatedIngredients} );
// // this.updatePerchaseState(updatedIngredients)
// // }

// // removeIngredientHandler = (type) =>{
// //   const oldCount = this.state.ingredients[type];
// //   if (oldCount <= 0 ) {
// //     return;
// //   }
// //   const updatedCount = oldCount -1;
// //   const updatedIngredients = {...this.state.ingredients};
// //   updatedIngredients[type] = updatedCount ;
// //   const priceDeducted = INGREDIENTS_PRICE[type] ;
// //   const oldPrice = this.state.totalPrice ;
// //   const newPrice = oldPrice - priceDeducted ;
// //   this.setState({totalPrice: newPrice , ingredients: updatedIngredients});
// //   this.updatePerchaseState(updatedIngredients)

// // }

// perchaseHandler = () =>{
//   this.setState({perchasing :true })
// }

// purchaseCancelHandler = ()=>{
//   this.setState({perchasing :false })

// }
// perchaseContinueHandler = () =>{
//   this.props.onInitPurchase()
//   this.props.history.push('/checkout')
// //   console.log(this.props)

// //   const queryIngredients = [];

// //   for (let i in this.props.ings) {
// //    queryIngredients.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
// //   }
// //   queryIngredients.push('price='+this.props.price);
// // const queryIngredientsString = queryIngredients. join('&')
// //   const { history } = this.props;
//   // history.push({
//   //   pathname: '/checkout',
//     // search:'?'+ queryIngredientsString
//   // })
// }

//   render() {

// let disabeledInfo = {
//   ...this.props.ings
// }
// for (let key in disabeledInfo) {
//  disabeledInfo[key] = disabeledInfo[key] <= 0
// }

// // spinner
// let orderSummary = null;

// let burger = this.props.error ? <p> Ingredients can't be loaded</p> : <Spinner/>
// if (this.props.ings) {
//   burger = (
//     <Aux>
//   <Burger ingredients={this.props.ings} />
//   <BuildControls ingredientAdded={this.props.onIngredientAdded} 
//    ingredientDeducted={this.props.onIngredientRemoved}
//    disabeled = {disabeledInfo}
//    price={this.props.price}
//    perchaseabel = {this.updatePerchaseState()}
//    ordered = {this.perchaseHandler} />
//    </Aux>
//    );
//    orderSummary = <OrderSummary 
//    ingredients={this.props.ings} 
//    purchaseCancelled={this.purchaseCancelHandler}
//    purchaseContinued = {this.perchaseContinueHandler}
//    price={this.props.price.toFixed(2)} />
// }
// //if (this.state.loading) { orderSummary = <Spinner/>}
//     return (
   
//    <Aux>
//      <Modal show={this.state.perchasing} 
//      modalClosed={this.purchaseCancelHandler} >
//        {orderSummary}
//      </Modal>
//      {burger}
//     </Aux>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     ings : state.burgerReducer.ingredients,
//     price : state.burgerReducer.totalPrice,
//     error : state.burgerReducer.error
//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     onIngredientAdded :(ingName)=> dispatch(actions.addIngredient(ingName)),
//     onIngredientRemoved :(ingName)=> dispatch(actions.removeIngredient(ingName)),
//     onfetchIngredients : ()=> dispatch(actions.fetchIngredients()),
//     onInitPurchase : () => dispatch(actions.purchaseInit())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler (BurgerBuilder,axios))

