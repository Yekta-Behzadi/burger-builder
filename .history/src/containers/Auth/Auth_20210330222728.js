import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'



 const Auth= ()=> {
   const [state, setState]=useState()
   state = 
  render() {
    const formElementArray = [];
    for (let key in orderForm) {
      formElementArray.push({
        id: key,
        config: orderForm[key],
      });
    }

    const from =(
      formElementArray.map(fromElement=>(
      <Input 
      key ={fromElement.id}
      elementType={elementArray.config.elementType}
      elementConfig={elementArray.config.elementConfig}
      elementValue={elementArray.config.value}
      // id = id: key ke hamon address, name va...
      changed ={(e)=> inputChangedHandler(e,elementArray.id)}
      invalid ={!elementArray.config.valid}
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
}

export default Auth