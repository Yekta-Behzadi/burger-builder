import React from 'react'
import classes  from './Modal.css'
const Modal = (props) => {
  return (
    <div 
    className={classes.Modal}
    style = {{
      transform: props.show ? 'translateY(0)' : 'translateY(-100 vh)',
      opacity : '0' : '1' 
    }} >
      {props.children}
    </div>
  )
}

export default Modal
