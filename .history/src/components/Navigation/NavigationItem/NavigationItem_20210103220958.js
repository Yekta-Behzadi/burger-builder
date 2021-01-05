import React from 'react'
import classes from './NavigationItem.css'
const NavigationItem = () => {
  return (
    <li className={classes.NavigationItem} >
      <a href={props.} >{props.children} </a>
      </li>  

  )
}

export default NavigationItem
