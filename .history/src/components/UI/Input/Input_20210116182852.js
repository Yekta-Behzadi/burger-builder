import React from 'react'

const Input = (props) => {
  switch (props.InputType) {
    case ('input'):
      inputElement = <input
      break;
  
    default:
      break;
  }
  return (
    <div>
      <label> {props.label} </label>
    </div>
  )
}

export default Input
