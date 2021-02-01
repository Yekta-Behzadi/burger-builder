import React from 'react'
import classes from './Input.css'


const Input = (props) => {
  let inputElement = null
  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={classes.inputElement} {...props.elementConfig} value={props.} />
      break;
      case ('textarea'):
        inputElement = <textarea className={classes.inputElement} {...props.elementConfig} value={props.} />
        break;
    default:
      inputElement = <input className={classes.inputElement} {...props.elementConfig} value={props.} />
      
  }
  return (
    <div className={classes.Input} >
      <label className={classes.label} > {props.label} </label>
      {inputElement}
    </div>
  )
}

export default Input