import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from '../Layout/Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
state={
  showSideDrawer:true
}

sideDrawerShowHandler = ()=>{
this.setState({showSideDrawer: false})
}

sideDrawrToggelHandler =()=>{
  this.setState()
}

  render(){
    return (
      <Aux>
         <Toolbar toggelHandler={this.state.showSideDrawer} />
         <SideDrawer open={this.state.showSideDrawer}
          closed={this.sideDrawerShowHandler} />
        <main className={classes.Content} > 
          {this.props.children}
        </main>
      </Aux>
     
    )
  }
  
}

export default Layout
