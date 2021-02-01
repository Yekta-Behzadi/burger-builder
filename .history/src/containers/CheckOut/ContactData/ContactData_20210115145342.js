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
        <form>
          <input type="text" name='name' placeholder='Your name' />
          <input type="email" name='email' placeholder='Your email' />
          <input type="text" name='street' placeholder='Your street' />
          <input type="text" name='postal' placeholder='Your name' />

        </form>
      </div>
    )
  }
}

export default ContactData
