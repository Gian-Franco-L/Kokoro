import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import userService from "../Services/user"

export function useItemToDatabase(){
  const {
    userName,
    itemToDataBase
  } = useContext(AppContext)

  useEffect(() =>{
    if(itemToDataBase !== null && !!userName){
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      const userJsonName = JSON.parse(loggedUserJSON).userName
      userService.updateUser({
        userName: userJsonName,
        cartItems: itemToDataBase
      })
    }
  }, [itemToDataBase])
}