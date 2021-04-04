import * as actionTypes from './actionsTypes'


export  const authStart = ()=>{
  return{
    type : actionTypes.AUTH_START
  }
}

export const authSuccess = (authData)=>{
return {
  type: actionTypes.AUTH_SUCCESS
}
}