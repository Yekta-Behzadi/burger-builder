import React, { Component } from 'react'
import Input from '../../components/UI'
 class Auth extends Component {
   state = {
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email",
      },
      value: "",
      valid : false,
      validation: {
        required: true,
        isEmail:true
      },
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Your Password",
      },
      value: "",
      valid : false,
      validation: {
        required: true,
        minLength:6
      },
      touched: false
    }
   }
  render() {
    return (
      <div>
        <form ></form>
      </div>
    )
  }
}

export default Auth