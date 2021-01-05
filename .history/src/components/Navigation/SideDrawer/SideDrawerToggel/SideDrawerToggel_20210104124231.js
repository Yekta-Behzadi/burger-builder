import React from 'react'
import classes from './SiadeDrawrToggel.css'
const SideDrawerToggel = (props) => {
  return (
    <div className={classes.SideDrawerToggel}
    onClick={props.clicked} >
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default SideDrawerToggel
