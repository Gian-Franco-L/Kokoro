import axios from 'axios'

const baseUrl = 'https://kokoro-backend-db-3thm.vercel.app/api/products/'
// const baseUrl = `http://localhost:8000/api/products/`

const getAll = async (newObject) =>{
  const req = axios.get(baseUrl, newObject)
  const res = await req
  return res.data
}

const create = async newObject =>{
  const req = axios.post(baseUrl, newObject)
  const res = await req
  return res.data
}

const update = async (id, newObject, userName) =>{
  const req = axios.put(`${baseUrl}${id}`, [newObject, userName])
  const res = await req
  return res.data
}

export default { getAll, create, update }