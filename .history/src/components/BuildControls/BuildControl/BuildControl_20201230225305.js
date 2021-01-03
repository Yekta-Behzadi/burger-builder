import React from 'react'
import classes from './BuildControl.css'
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl} >
      <div className={classes.label} >{props.label} </div>
      <button className= >Less</button>
      <button>More</button>
    </div>
  )
}

export default BuildControl
