import React from 'react'
import classes from './BuildControl.css'
const BuildControl = (props) => {
  return (
    <div className={classes.} >
      <div>{props.label} </div>
      <button>Less</button>
      <button>More</button>
    </div>
  )
}

export default BuildControl
