import React from 'react'
import classes from './Button.css'
const Button = (props) => {
  return (
    <button 
    className= {}
    onClick = {props.clicked}>
     {props.children} 
    </button>
  )
}

export default Button
