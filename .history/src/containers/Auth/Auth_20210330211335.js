import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'


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
    const formElementArray = [];
    for (let key in orderForm) {
      formElementArray.push({
        id: key,
        config: orderForm[key],
      });
    }

    const from =(
      formElementArray.map(fromElement=>
        (<Input />)
       )
    )

    return (
      <div>
        <form ></form>
      </div>
    )
  }
}

export default Auth