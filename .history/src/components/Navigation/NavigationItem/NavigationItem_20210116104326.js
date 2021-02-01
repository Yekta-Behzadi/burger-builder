import React from 'react'
import classes from './NavigationItem.css'
import { NavLink } from 'react-router-dom'
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} >
      <NavLink to={props.link} activeClassName={classes.active} ec >{props.children} </NavLink>
      </li>  

  )
}

export default NavigationItem