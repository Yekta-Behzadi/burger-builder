import React,{useState, useEffect} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'




const withErrorHandler = (WrappedComponent,axios) => {
  // return class extends Component {
    return props => {
      const [error , setError] = useState(null)
    // state = {
    //   error : null
    // }

  
    // componentWillMount(){
      const reqInterceptors= axios.interceptors.request.use(req =>{
        setError(null)
        // this.setState({error : null})
        return req

      })
      const resInterceptors= axios.interceptors.response.use(res => res,err =>{
        setError(err)
        console.log(error)
      })
    // }
    // componentWillUnmount(){

      useEffect(() => {
        
      }, [input])
      
    }
    errorConfirmedHandler = () =>{
      this.setState({error : null})
    // }

    
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
   
     

  
  


export default withErrorHandler
