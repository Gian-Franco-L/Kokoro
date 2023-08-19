import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/purchases/'
// const baseUrl = `http://localhost:8000/api/purchases/`

const getAllPurchases = async () =>{
  const req = axios.get(baseUrl)
  const res = await req
  return res.data
}

const createPurchase = async (newObject, {token}) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const req = axios.post(baseUrl, newObject, config)
  const res = await req
  return res.data
}

const deletePurchase = async (id, {token}) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const req = axios.delete(`${baseUrl}${id}`, config)
  const res = await req
  return res.data
}

const updatePurchase = async (id, newObject, {token}) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const req = axios.put(`${baseUrl}${id}`, newObject, config)
  const res = await req
  return res.data
}

export default { getAllPurchases, createPurchase, deletePurchase, updatePurchase }