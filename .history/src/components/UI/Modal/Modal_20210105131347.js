import React, { Component } from 'react'
import classes  from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
    <div 
    className={classes.Modal}
    style = {{
      transform: props.show ? 'translateY(0)' : 'translateY(-100 vh)',
      opacity : props.show ? '1' : '0' 
    }} >
      {props.children}
    </div>
    </Aux>
  )
}

export default Modal
