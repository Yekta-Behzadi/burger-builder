import React from 'react'

const Input = (props) => {
  switch (props.InputType) {
    case ('input'):
      inputElement = <input className={class} {...props} />
      break;
      case ('textarea'):
        inputElement = <textarea className={class} {...props} />
        break;
    default:
      inputElement = <input className={class} {...props} />
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
