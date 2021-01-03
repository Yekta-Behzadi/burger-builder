import React from 'react'
import classes  from './Modal.css'
const Modal = (props) => {
  return (
    <div 
    className={classes.Modal}
    sty >
      {props.children}
    </div>
  )
}

export default Modal
