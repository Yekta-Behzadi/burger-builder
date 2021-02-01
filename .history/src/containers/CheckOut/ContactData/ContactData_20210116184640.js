import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spiner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

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
  .then(response =>  { this.setState({loading : false }) 
    this.props.history.push('/') }
)
    .catch(
      error => 
      this.setState({loading : false})  

    )}

  render() {
    let form =(<form>
      <Input InputT  type="text" name='name' placeholder='Name' />
      <Input InputT  type="email" name='email' placeholder='Email' />
      <Input InputT  type="text" name='street' placeholder='Street' />
      <Input InputT  type="text" name='postal' placeholder='Postal Code' />
      <Button btnType='Success'
      clicked={this.orderHandler} >ORDER</Button>
    </form>)
    if (this.state.loading) {
      form= <Spiner/>
    }
    return (
      <div className={classes.ContactData} >
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
