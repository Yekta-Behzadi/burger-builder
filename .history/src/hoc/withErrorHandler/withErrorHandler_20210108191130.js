import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return calss extends (
      <Aux>
        <Modal show> Somthing didn't work </Modal>
      <WrappedComponent {...props} />
      </Aux>
    )
  }
  
}

export default withErrorHandler
