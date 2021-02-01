import axios from 'axios'

const instance= axios.create({
  baseURL : 'https://react-my-burger-b7c4d-default-rtdb.firebaseio.com/'
})

export default instance