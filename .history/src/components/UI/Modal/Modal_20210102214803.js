import React from 'react'
import classes  from './Modal.css'
const Modal = (props) => {
  return (
    <div 
    className={classes.Modal}
    style = {{
      transform: props.show ? 'translate(o)0 
    }} >
      {props.children}
    </div>
  )
}

export default Modal
