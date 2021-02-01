import React from 'react'
import classes from './NavigationItem.css'
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} >
      <N href={props.link} className={props.active ? classes.active : null} >{props.children} </N>
      </li>  

  )
}

export default NavigationItem
