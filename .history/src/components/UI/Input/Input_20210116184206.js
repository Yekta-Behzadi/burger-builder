import React from 'react'
import classes from './Input.css'


const Input = (props) => {
  switch (props.InputType) {
    case ('input'):
      inputElement = <input className={classes.} {...props} />
      break;
      case ('textarea'):
        inputElement = <textarea className={classes.} {...props} />
        break;
    default:
      inputElement = <input className={classes.} {...props} />
      break;
  }
  return (
    <div>
      <label> {props.label} </label>
      {inputElement}
    </div>
  )
}

export default Input
