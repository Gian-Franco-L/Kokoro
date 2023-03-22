import axios from 'axios'

const baseUrl = `${process.env}/api/login/`

const login = async credentials =>{
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { login }