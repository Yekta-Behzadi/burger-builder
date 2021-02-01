import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spiner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

 class ContactData extends Component {
state = {
  orderForm : {
    name: {
      elementType : 'input',
      elementConfig :{
        type:'text',
        placeholder:'Your Name'
      },
      value: ''
    },
    email:{
      elementType : 'text',
      elementConfig : {
        type:'email',
        placeholder: 'Your E-mail',
      },
      value:''
    },
      street:{
        elementType : 'text',
        elementConfig: {
          type: 'text',
          placeholder : 'Street'
        },
        value:''
      },
      zipCode : {
        elementType: 'text',
        elementConfig: {
          type: 'text',
          placeholder : 'Your Code'
        },
        value:''
      },
      deliveryMethhod : {
        elementType: 'select',
        elementConfig: {
          options : [
            {value: 'fastest', displayValue: 'Fastest'},
          {value:'cheapest', displayValue: 'Cheapest'}]
        },
        value:''
      }
    
  }
 ,
  loading:false

}
orderHandler = (e)=>{
  e.preventDefault();
alert('You continue')
  this.setState({loading: true})
  const order = {
    ingredients : this.props.ingredients,
    price: this.props.totalPrice,
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
    const forElementArray = [];
    for (let key in this.state.orderForm) {
      forElementArray.push({
        id:key,
        config: this.state.orderForm[key]
      })
    }
    let form =(<form>
      <Input elementType='...' elementConfig='...' value='...' />
      {for}
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
