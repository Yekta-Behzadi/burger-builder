import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer} >
      <div></div>
      <Logo />
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer
