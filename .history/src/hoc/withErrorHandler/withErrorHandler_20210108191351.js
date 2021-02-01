import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
import { render } from 'react-dom'
const withErrorHandler = (WrappedComponent,axios) => {
  return calss extends Component{
    render(){
      return (
        <Aux>
          <Modal show> Somthing didn't work </Modal>
        <WrappedComponent {...this.props} />
        </Aux>
      )
    }
    
  }
  
}

export default withErrorHandler
