import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../NavigationItem/NavigationItem'
const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems} >
        <NavigationItem link='/'act >Burger Builder</NavigationItem>
        <NavigationItem link='/'>Check Out</NavigationItem>

    </ul>
  )
}

export default NavigationItems
