import React from 'react'

const Input = (props) => {
  switch (props.InputType) {
    case ('input'):
      inputElement = <input {...props} />
      break;
      case ('textarea'):
        inputElement = <textarea {...props} />
        break;
    default:
      inputElement = <input {...props} />
      break;
  }
  return (
    <div>
      <label> {props.label} </label>
      {input}
    </div>
  )
}

export default Input
