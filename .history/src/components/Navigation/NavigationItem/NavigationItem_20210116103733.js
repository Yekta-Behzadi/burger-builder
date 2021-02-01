import React from 'react'
import classes from './NavigationItem.css'
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} >
      <Nav href={props.link} className={props.active ? classes.active : null} >{props.children} </Nav>
      </li>  

  )
}

export default NavigationItem
