import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './'

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer} >
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer
