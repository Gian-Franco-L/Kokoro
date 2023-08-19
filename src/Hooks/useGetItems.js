import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import userService from "../Services/user"

export function useGetItems(){
  const {
    filterStatus,
    searchedArticles,
    setItemCartAux,
    setItemToDataBase,
    userName
  } = useContext(AppContext)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      userService.getAllUsers()
        .then(res => {
          const user = res.filter(item => item.userName === userName)
          if(!!user.length){
            const cartItems = user[0].cartItems
            setItemToDataBase(cartItems)
            setItemCartAux(cartItems)
          }
        })
    }
  }, [filterStatus, searchedArticles, userName]);
}