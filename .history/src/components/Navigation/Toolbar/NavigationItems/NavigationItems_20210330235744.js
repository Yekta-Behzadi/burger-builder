import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../NavigationItem/NavigationItem'
const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems} >
        <NavigationItem exact link='/'active >Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>

    </ul>
  )
}

export default NavigationItems
