import React from 'react'
import classes from './Button.css'
const Button = (props) => {
  return (
    <button 
    className= {[classes]}
    onClick = {props.clicked}>
     {props.children} 
    </button>
  )
}

export default Button
