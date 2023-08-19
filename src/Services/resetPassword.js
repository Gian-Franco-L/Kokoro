import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/resetPassword'
// const baseUrl = `http://localhost:8000/api/resetPassword`

const resetPassword = async user =>{
  const { data } = await axios.put(baseUrl, user)
  return data
}

export default { resetPassword }

