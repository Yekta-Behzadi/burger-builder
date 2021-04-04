import React, { Component } from 'react'

 class Auth extends Component {
   state = {
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      valid : false,
      validation: {
        required: true
      },
      touched: false
    },
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