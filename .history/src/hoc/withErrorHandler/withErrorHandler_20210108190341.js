import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <Aux>
      <WrappedComponent {...props} />
    )
  }
  
}

export default withErrorHandler
