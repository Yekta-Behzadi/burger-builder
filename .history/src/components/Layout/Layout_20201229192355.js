import React from 'react'
import Aux from '../../hoc/Aux'
import

const Layout = (props) => {
  return (
    <Aux>
       <div>
      toolbar, sidDrawer, backdrop
      </div>
      <main className={} > 
        {props.children}
      </main>
    </Aux>
   
  )
}

export default Layout
