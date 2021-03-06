import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import aux from '../../../hoc/Aux'

const SideDrawer = (props) => {
  return (
    <aux></aux>
  <Backdrop/>
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
