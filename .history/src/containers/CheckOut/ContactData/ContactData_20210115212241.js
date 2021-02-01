import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
 class ContactData extends Component {
state = {
  name: '',
  email:'',
  address:{
    street:'',
    postalCode : ''
  }

}

  render() {
    return (
      <div className={classes.ContactData} >
        <h4>Enter Your Contact Data</h4>
        <form>
          < type="text" name='name' placeholder='Name' />
          < type="email" name='email' placeholder='Email' />
          < type="text" name='street' placeholder='Street' />
          < type="text" name='postal' placeholder='Postal Code' />
          <Button btnType='Success'
          clicked={this.props.checkoutContinued} >ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
