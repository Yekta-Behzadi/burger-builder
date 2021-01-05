import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  
  const ingredientSummary = Object.keys( props.ingredients)
  .map((igkey)=>{
    return (<li key={igkey} >
       <span className={{textTransform: 'capitlize'}} >{igkey}</span>: {props.ingredients[igkey]} 
        </li>)
  })
  render(){
    
  }
  
}

export default OrderSummary
