import React from 'react'
import classes from './Input.css'


const Input = (props) => {
  let 
  switch (props.InputType) {
    case ('input'):
      inputElement = <input className={classes.inputElement} {...props} />
      break;
      case ('textarea'):
        inputElement = <textarea className={classes.inputElement} {...props} />
        break;
    default:
      inputElement = <input className={classes.inputElement} {...props} />
      break;
  }
  return (
    <div className={classesInput} >
      <label className={classes.label} > {props.label} </label>
      {inputElement}
    </div>
  )
}

export default Input
