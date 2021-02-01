import React from 'react'

const withErrorHandler = (WrappedComponent) => {
  return (props) =>{
    return (
      <WrappedComponent {...} />
    )
  }
  
}

export default withErrorHandler
