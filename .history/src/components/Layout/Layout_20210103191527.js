import React from 'react'
import Aux from '../../hoc/Aux'
import classes from '../Layout/Layout.css'
import toolbar from '../Navigation/Toolbar/toolbar'

const Layout = (props) => {
  return (
    <Aux>
       <toolbar
      <main className={classes.Content} > 
        {props.children}
      </main>
    </Aux>
   
  )
}

export default Layout
