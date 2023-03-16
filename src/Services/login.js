import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db.vercel.app/api/login/'

const login = async credentials =>{
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { login }