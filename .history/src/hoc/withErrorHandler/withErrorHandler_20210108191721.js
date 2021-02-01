import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
import { render } from 'react-dom'
const withErrorHandler = (WrappedComponent,axios) => {
  return calss extends Component{
    render () {
      return (
          <Aux>
              <Modal 
                  show={this.state.error}
                  modalClosed={this.errorConfirmedHandler}>
                  {this.state.error ? this.state.error.message : null}
              </Modal>
              <WrappedComponent {...this.props} />
          </Aux>
      );
  }
  }
  
}

export default withErrorHandler
