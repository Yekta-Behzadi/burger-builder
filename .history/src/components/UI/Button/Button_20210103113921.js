import React from 'react'

const Button = (props) => {
  return (
    <button onClick = {props}>
     {props.children} 
    </button>
  )
}

export default Button
