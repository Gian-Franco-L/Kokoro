import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/users/'
// const baseUrl = `http://localhost:8000/api/users/`

const createUser = async user =>{
  const { data } = await axios.post(baseUrl, user)
  return data
}

const getAllUsers = async () =>{
  const req = axios.get(baseUrl)
  const res = await req
  return res.data
}

const updateUser = async credentials =>{
  const { data } = await axios.put(baseUrl, credentials)
  return data
}

const deleteUser = async (id, userName, {token}) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.delete(`${baseUrl}${id}/${userName}`, config)
  return data
}

export default { createUser, getAllUsers, updateUser, deleteUser }