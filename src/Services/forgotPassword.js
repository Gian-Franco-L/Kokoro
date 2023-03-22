import axios from 'axios'

const baseUrl = `${process.env}/api/forgotpassword`

const createForgotPassword = async forgotPassword =>{
  const { data } = await axios.put(baseUrl, forgotPassword)
  return data
}

export default { createForgotPassword }
