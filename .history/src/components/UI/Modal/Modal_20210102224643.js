import React from 'react'
import classes  from './Modal.css'
import ux from '../../../hoc/Aux'

const Modal = (props) => {
  return (
    <Aux></Aux>
    <div 
    className={classes.Modal}
    style = {{
      transform: props.show ? 'translateY(0)' : 'translateY(-100 vh)',
      opacity : props.show ? '1' : '0' 
    }} >
      {props.children}
    </div>
  )
}

export default Modal
