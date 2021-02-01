import React from 'react'

const Input = (props) => {
  switch (props.InputType) {
    case ('input'):
      inputElement = <input class{...props} />
      break;
      case ('textarea'):
        inputElement = <textarea class{...props} />
        break;
    default:
      inputElement = <input class{...props} />
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
