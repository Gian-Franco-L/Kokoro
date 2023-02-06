import axios from 'axios'

const baseUrl = 'http://localhost:8000/api/users/'

const createUser = async user =>{
  const { data } = await axios.post(baseUrl, user)
  return data
}

const getAllUsers = () =>{
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const updateUser = async credentials =>{
  const { data } = await axios.put(baseUrl, credentials)
  return data
}
export default { createUser, getAllUsers, updateUser }