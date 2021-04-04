import React,{useState} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'





const Layout = (props) => {
const [showSideDrawer, setShowSideDrawer] = useState(true)



const sideDrawerShowHandler = ()=>{
  setShowSideDrawer(false)
  }
  
  const sideDrawrToggelHandler =()=>{
    setShowSideDrawer(!showSideDrawer)
  }
  
  return (
    <Aux>
         <Toolbar toggelHandler={sideDrawrToggelHandler} />
         <SideDrawer 
          open={showSideDrawer}
          closed={sideDrawerShowHandler} />
        <main className={classes.Content} > 
          {props.children}
        </main>
      </Aux>
  )
}

export default Layout





