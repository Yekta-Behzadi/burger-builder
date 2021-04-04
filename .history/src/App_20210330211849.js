import React from 'react'
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/'

const App = () => {
  return (
    <div>
          <Layout>
           <Switch>
           <Route  path='/checkout' render = {(props)=> <CheckOut {...props} />} />
           <Route path = '/orders' render={(props)=> <Orders {...props} /> }/>
           <Route exact path='/' component = {BurgerBuilder} />
           </Switch>
           </Layout>
    </div>
  )
}

export default App


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//           <Switch>
//           <Route  path='/checkout' component = {CheckOut} />
//           <Route path = '/orders' component={Orders}/>
//           <Route exact path='/' component = {BurgerBuilder} />
//           </Switch>
//           </Layout>
//       </div>
//     )
//   }
// }
