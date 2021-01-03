import React from 'react'

const Button = (props) => {
  return (
    <button 
    className= {{}}
    onClick = {props.clicked}>
     {props.children} 
    </button>
  )
}

export default Button
