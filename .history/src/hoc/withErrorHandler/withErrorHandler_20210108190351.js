import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <Aux>
        <Modal
      <WrappedComponent {...props} />
      </Aux>
    )
  }
  
}

export default withErrorHandler
