import React from 'react'
import Aux from '../../hoc/Aux'
import classes from '../Layout/Layout.css'

const Layout = (props) => {
  return (
    <Aux>
       <div>
      toolbar, sidDrawer, backdrop
      </div>
      <main className={classes.Content} > 
        {props.children}
      </main>
    </Aux>
   
  )
}

export default Layout
