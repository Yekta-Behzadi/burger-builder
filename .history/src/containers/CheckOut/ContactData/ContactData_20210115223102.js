import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../axios-orders'

 class ContactData extends Component {
state = {
  name: '',
  email:'',
  address:{
    street:'',
    postalCode : ''
  },
  loading:false

}
orderHandler = (e)=>{
  e.preventDefault();
alert('You continue')
  this.setState({loading: true})
  const order = {
    ingredients : this.props.ingredients,
    price: this.props.totalPrice,
    customer : {
      name: "Yekta Behzadi",
      address : {
        street : 'TestStreet',
        zipCode : "41351",
        country :"Germany"
      },
      email: 'test@gmail.com',
    },
    deliveryMethhod : "fastest"
  }
  axios.post('/orders.json',order)
  .then(response => 
    this.setState({loading : false, perchasing : false})  
)
    .catch(
      error => 
      this.setState({loading : false, perchasing : false})  

    )}

  render() {
    return (
      <div className={classes.ContactData} >
        <h4>Enter Your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name='name' placeholder='Name' />
          <input className={classes.Input} type="email" name='email' placeholder='Email' />
          <input className={classes.Input} type="text" name='street' placeholder='Street' />
          <input className={classes.Input} type="text" name='postal' placeholder='Postal Code' />
          <Button btnType='Success'
          clicked={this.orderHandler} >ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
