import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials =>{
  console.log("asd");
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { login }