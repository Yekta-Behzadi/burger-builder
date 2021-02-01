import React, { Component } from 'react'

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
      <div>
        <h4>Enter Your Contact Data</h4>
      </div>
    )
  }
}

export default ContactData
