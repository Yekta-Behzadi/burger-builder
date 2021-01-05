import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar} >
<Si      <div className={classes.Logo} >
      <Logo closedClose={this.props.closed} />

      </div>
      <nav className={classes.DesktopOnly} >
        <NavigationItems/>
      </nav>
    </header>
  )
}

export default toolbar
