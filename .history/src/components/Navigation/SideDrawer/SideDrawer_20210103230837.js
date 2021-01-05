import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer} >
      <div className={classes.SideDrawer} >
      <Logo />
      </div>
      
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer
