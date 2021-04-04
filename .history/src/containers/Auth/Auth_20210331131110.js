import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'


 const Auth= ()=> {
   const [controls, setControls]= useState({
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
   )
   const checkValidity = (value,rules) =>{
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength){
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxnLength){
      isValid = value.length <= rules.maxnLength && isValid
    }
    return isValid
    
    }
   const inputChangedHandler = (e, controlName) =>{
    const updatedControls = {
      ...controls,
      [controlName]: {
          ...controls[controlName],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched: true
      }}
setControls(updatedControls)
   
  };
    const formElementArray = [];
    for (let key in controls) {
      formElementArray.push({
        id: key,
        config: controls[key],
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
      shouldValidate={fromElement.config.validation}
      touched ={fromElement.config.touched} />
      )
       )
    )

    return (
      <div>
        <form className={classes.Auth } >
          {form}
          <Button btnType='Success'>Submit</Button>
        </form>
      </div>
    )
  }
 


export default Auth