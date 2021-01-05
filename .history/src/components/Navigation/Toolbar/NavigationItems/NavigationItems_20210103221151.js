import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../NavigationItem/NavigationItem'
const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems} >
        <NavigationItem></NavigationItem>
    </ul>
  )
}

export default NavigationItems
