import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const SideDrawer = (props) => {
const attachedClasses = [classes.SideDrawer, classes.Close]

if (props.open) {
  
}
  return (
    <Aux>
  <Backdrop show={props.open} clicked={props.closed} />
    <div className={classes.SideDrawer} >
      <div className={classes.Logo} >
      <Logo />
      </div>
      
      <nav>
        <NavigationItems/>
      </nav>
    </div>
    </Aux>
  )
}

export default SideDrawer
