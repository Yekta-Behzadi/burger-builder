import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../NavigationItem/NavigationItem'
const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems} >
        <NavigationItem>Burger Builder</NavigationItem>
        <NavigationItem></NavigationItem>

    </ul>
  )
}

export default NavigationItems
