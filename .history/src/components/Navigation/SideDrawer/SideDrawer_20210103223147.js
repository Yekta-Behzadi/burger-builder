import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'

const SideDrawer = (props) => {
  return (
    <div className={clas} >
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer
