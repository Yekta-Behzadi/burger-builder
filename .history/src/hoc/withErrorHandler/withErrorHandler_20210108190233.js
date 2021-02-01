import React from 'react'
import Modal from '../../components/'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <WrappedComponent {...props} />
    )
  }
  
}

export default withErrorHandler
