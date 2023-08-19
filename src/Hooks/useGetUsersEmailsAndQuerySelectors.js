import { useEffect, useContext } from "react"
import userService from "../Services/user"
import { AppContext } from "../Context/AppContext"

export function useGetUsersEmailsAndQuerySelectors(){
  const {
    email,
    setEmails,
    setAllUsers
  } = useContext(AppContext)

  const body = document.querySelector("#body")
  const registerUser = document.querySelector("#userRegister")
  const passwordRegister = document.querySelector("#passwordRegister")
  const passwordRegisterAgain = document.querySelector("#passwordRegisterAgain")
  const nameLastnameRegister= document.querySelector("#nameLastnameRegister")
  const emailRegister= document.querySelector("#emailRegister")
  const phoneRegister= document.querySelector("#phoneRegister")
  const userLoginInput = document.querySelector("#userLogin")
  const passwordLoginInput = document.querySelector("#passwordLogin")

  useEffect(() =>{
    userService.getAllUsers()
      .then(res => {
        const mail = res.map(mail => mail.email)
        setEmails(mail)
      })
      .catch((err) =>{
        console.log(err)
      })
    userService.getAllUsers()
      .then(res => {
        setAllUsers(res.filter(userInfo => userInfo.userName))
      })
      .catch((err) =>{
        console.log(err)
      })
  }, [email])

  return{
    body,
    registerUser,
    passwordRegister,
    passwordRegisterAgain,
    nameLastnameRegister,
    emailRegister,
    phoneRegister,
    userLoginInput,
    passwordLoginInput
  }
}