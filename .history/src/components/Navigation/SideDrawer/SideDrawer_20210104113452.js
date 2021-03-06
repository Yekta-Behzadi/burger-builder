import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '..'
const SideDrawer = (props) => {
  return (
  
    <div className={classes.SideDrawer} >
      <div className={classes.Logo} >
      <Logo />
      </div>
      
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer
