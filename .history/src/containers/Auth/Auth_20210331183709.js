import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actions from '../../store/action/index'
import {connect} from 'react-redux'


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
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
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
          value: e.target.value,
          valid: checkValidity(e.target.value, controls[controlName].validation),
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
      formElementArray.map(formElement=>(
      <Input 
      key ={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      elementValue={formElement.config.value}
      // id = id: key ke hamon address, name va...
      changed ={(e)=> inputChangedHandler(e,formElement.id)}
      invalid ={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched ={formElement.config.touched} />
      )
       )
    )

    return (
      <div className={classes.Auth }>
        <form  >
          {form}
          <Button btnType='Success'>Submit</Button>
        </form>
      </div>
    )
  }
 
const mapDispatchToProps = (dispatch)=>{
  return{
    onAuth: (email,password)=> dispatch(actions.auth(email, password))

  }
}

export default connect(null,mapDispatchToProps) (Auth)