import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/forgotpassword'
// const baseUrl = `http://localhost:8000/api/forgotpassword`

const createForgotPassword = async forgotPassword =>{
  const { data } = await axios.put(baseUrl, forgotPassword)
  return data
}

export default { createForgotPassword }
