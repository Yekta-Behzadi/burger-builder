import React from 'react'
import Aux from '../../hoc/Aux'


const Layout = (props) => {
  return (
    <Aux>
       <div>
      toolbar, sidDrawer, backdrop
      </div>
      <main > 
        {props.children}
      </main>
    </Aux>
   
  )
}

export default Layout
