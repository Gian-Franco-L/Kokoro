import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import userService from "../Services/user"

export function useGetAllPurchaseItems(){
  const {
    userName,
    setPurchaseItems,
  } = useContext(AppContext)

  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  useEffect(() =>{
    if(!!loggedUserJSON && userName !== null){
      userService.getAllUsers(JSON.parse(loggedUserJSON).userName)
        .then(res => setPurchaseItems(res))
    }
  }, [userName])
}