import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spiner from '../../../components/UI/Spinner/Spinner'

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
    let form =()
    if (this.state.loading) {
      form= <Spiner/>
    }
    return (
      <div className={classes.ContactData} >
        <h4>Enter Your Contact Data</h4>
        
      </div>
    )
  }
}

export default ContactData