import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../NavigationItem/NavigationItem'
const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems} >
        <NavigationItem exact link='/'active >Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Authenticate</NavigationItem>

    </ul>
  )
}

export default NavigationItems
