import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from '../Layout/Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component(props){

  render(){
    return (
      <Aux>
         <Toolbar/>
         <SideDrawer/>
        <main className={classes.Content} > 
          {props.children}
        </main>
      </Aux>
     
    )
  }
  
}

export default Layout
