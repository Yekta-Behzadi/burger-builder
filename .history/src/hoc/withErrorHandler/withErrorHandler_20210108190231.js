import React from 'react'
import Modal from '../../c'
const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <WrappedComponent {...props} />
    )
  }
  
}

export default withErrorHandler
