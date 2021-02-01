import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <WrappedComponent {...props} />
    )
  }
  
}

export default withErrorHandler
