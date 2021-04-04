import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'



 const Auth= ()=> {
   const [state, setState]= useState(
    {
      orderForm:
      {email: {
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
  }   }
   )
 
    const formElementArray = [];
    for (let key in orderForm) {
      formElementArray.push({
        id: key,
        config: orderForm[key],
      });
    }

    const form =(
      formElementArray.map(fromElement=>(
      <Input 
      key ={fromElement.id}
      elementType={fromElement.config.elementType}
      elementConfig={fromElement.config.elementConfig}
      elementValue={fromElement.config.value}
      // id = id: key ke hamon address, name va...
      changed ={(e)=> inputChangedHandler(e,fromElement.id)}
      invalid ={!fromElement.config.valid}
      shouldValidate={elementArray.config.validation}
      touched ={elementArray.config.touched} />
      )
       )
    )

    return (
      <div>
        <form >
          {form}
          <Button btnType='Success'>Submit</Button>
        </form>
      </div>
    )
  }
 


export default Auth