import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/login'
// const baseUrl = `http://localhost:8000/api/login`

const login = async credentials =>{
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { login }