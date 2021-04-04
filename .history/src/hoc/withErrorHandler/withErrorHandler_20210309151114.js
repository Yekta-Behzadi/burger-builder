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

   useEffect(() => {
     return () => {
      axios.interceptors.request.eject(reqInterceptors)
      axios.interceptors.response.eject(resInterceptors)
     }
   }, [reqInterceptors,resInterceptors])
    
   // componentWillUnmount(){
    //   axios.interceptors.request.eject(this.reqInterceptors)
    //   axios.interceptors.response.eject(this.resInterceptors)
    // }

    // errorConfirmedHandler = () =>{
    //   this.setState({error : null})
    // }
const errorConfirmedHandler = ()=>{
  setError(null)
}
    
      return (
        <Aux>
            <Modal 
                show={error}
                modalClosed={errorConfirmedHandler}>
                {error ? error.message : null}
            </Modal>
            <WrappedComponent {...props} />
        </Aux>
    );
    }
  }
   
     

  
  


export default withErrorHandler
