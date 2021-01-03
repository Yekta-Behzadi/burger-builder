import React from 'react'
import classes from '.'
const BuildControl = (props) => {
  return (
    <div>
      <div>{props.label} </div>
      <button>Less</button>
      <button>More</button>
    </div>
  )
}

export default BuildControl
