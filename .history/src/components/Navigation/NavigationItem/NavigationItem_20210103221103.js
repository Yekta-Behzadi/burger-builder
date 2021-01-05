import React from 'react'
import classes from './NavigationItem.css'
const NavigationItem = () => {
  return (
    <li className={classes.NavigationItem} >
      <a href={props.link} className={props.active ? classes.active } >{props.children} </a>
      </li>  

  )
}

export default NavigationItem
