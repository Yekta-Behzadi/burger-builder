import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'


const withErrorHandler = (WrappedComponent,axios) => {
  return class extends Component {
    state = {
      error : null
    }
    componentDidMount(){
      axios.
      axios.interceptors.response.use(null,error =>{
        this.setState({error : error})
        console.log(error)
      })
    }
    

    render(){
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
