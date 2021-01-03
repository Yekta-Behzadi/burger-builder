import React from 'react'
import classes from './BuildControl.css'
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl} >
      <div className={classes.label} >{props.label} </div>
      <button className={classes.Less} >Less</button>
      <button className={} >More</button>
    </div>
  )
}

export default BuildControl
