import React, { Component } from 'react'

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
    pass: {
      elementType: "input",
      elementConfig: {
        type: "pass",
        placeholder: "Your Email",
      },
      value: "",
      valid : false,
      validation: {
        required: true,
        isEmail:true
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