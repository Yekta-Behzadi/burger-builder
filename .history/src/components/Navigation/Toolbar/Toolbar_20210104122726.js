import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import SideDrawerToggel from '../SideDrawer/SideDrawerToggel/SideDrawerToggel'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar} >
      <SideDrawerToggel clicked={props.t} />
      <div className={classes.Logo} >
      <Logo closedClose={this.props.closed} />

      </div>
      <nav className={classes.DesktopOnly} >
        <NavigationItems/>
      </nav>
    </header>
  )
}

export default toolbar
