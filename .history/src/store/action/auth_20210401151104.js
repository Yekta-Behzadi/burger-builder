import * as actionTypes from './actionsTypes'
import axios from 'axios'

export  const authStart = ()=>{
  return{
    type : actionTypes.AUTH_START
  }
}

export const authSuccess = (authData)=>{
return {
  type: actionTypes.AUTH_SUCCESS,
  authData: authData
}
}

export const authFailed = (error)=>{
  return{
    type: actionTypes.AUTH_FAILED,
    error: error
  }
}

export const auth= (email,password ) =>{
  return dispatch=> {
    dispatch (authStart())
    axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxU3CEVr748Xo_dXCj5U0n1aY2vRqImPs
    ')
  }
}