import React,{useState} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'





const Layout = (props) => {
const [showSideDrawer, setShowSideDrawer] = useState(true)



sideDrawerShowHandler = ()=>{
  setShowSideDrawer(false)
  }
  
  sideDrawrToggelHandler =()=>{
    setShowSideDrawer((prevState)=> {
      return{!prevState.showSideDrawer})
  }
  
  return (
    <Aux>
         <Toolbar toggelHandler={sideDrawrToggelHandler} />
         <SideDrawer open={showSideDrawer}
          closed={sideDrawerShowHandler} />
        <main className={classes.Content} > 
          {props.children}
        </main>
      </Aux>
  )
}

export default Layout





class Layout extends Component{
state={
  showSideDrawer:true
}

sideDrawerShowHandler = ()=>{
this.setState({showSideDrawer: false})
}

sideDrawrToggelHandler =()=>{
  this.setState((prevState)=> {
    return{showSideDrawer : !prevState.showSideDrawer}})
}

  render(){
    return (
      <Aux>
         <Toolbar toggelHandler={this.sideDrawrToggelHandler} />
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
