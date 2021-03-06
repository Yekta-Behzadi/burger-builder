import React from 'react'
import classes  from './Modal.css'
const Modal = (props) => {
  return (
    <div 
    className={classes.Modal}
    style = {{
      transform: props.show ? 'translateY(0)' : 'translate(-100 vh)' 
    }} >
      {props.children}
    </div>
  )
}

export default Modal
