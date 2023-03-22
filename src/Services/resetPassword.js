import axios from 'axios'

const baseUrl = `${process.env}/api/resetPassword/`

const resetPassword = async user =>{
  const { data } = await axios.put(baseUrl, user)
  return data
}

export default { resetPassword }

