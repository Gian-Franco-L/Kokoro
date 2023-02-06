import axios from 'axios'

const baseUrl = "http://localhost:8000/api/purchases/"

const getAllPurchases = () =>{
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const createPurchase = (newObject, {token}) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const req = axios.post(baseUrl, newObject, config)
  return req.then(res => res.data)
}

const updatePurchase = (id, newObject) =>{
  const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(res => res.data)
}

export default { getAllPurchases, createPurchase, updatePurchase }