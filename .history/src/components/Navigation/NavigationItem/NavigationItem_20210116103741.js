import React from 'react'
import classes from './NavigationItem.css'
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} >
      <NavL href={props.link} className={props.active ? classes.active : null} >{props.children} </NavL>
      </li>  

  )
}

export default NavigationItem
