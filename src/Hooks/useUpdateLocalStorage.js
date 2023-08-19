import { useContext, useEffect } from "react"
import { AppContext } from "../Context/AppContext"

export function useUpdateLocalStorage(){
  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  const {
    setUserName,
    setName,
    setEmail,
    setPhone,
    setToken,
    setAccess,
  } = useContext(AppContext)

  useEffect(() =>{
    if(loggedUserJSON){
      setUserName(JSON.parse(loggedUserJSON).userName)
      setName(JSON.parse(loggedUserJSON).name)
      setEmail(JSON.parse(loggedUserJSON).email)
      setPhone(JSON.parse(loggedUserJSON).phone)
      setToken(JSON.parse(loggedUserJSON).token)
      setAccess(JSON.parse(loggedUserJSON).access)
    }
  }, [])
}