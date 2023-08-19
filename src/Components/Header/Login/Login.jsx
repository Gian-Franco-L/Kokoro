import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import { changeModalState } from "./Functions/LoginFunctions"
import { IoMdPerson } from "react-icons/io"

const Login = () =>{

  const {
    userName,
    setOpenLoginModal
  } = useContext(AppContext)

  return(
    <>
      {!userName &&
        <LoginButton onClick={() => changeModalState(setOpenLoginModal)}>
        <button><IoMdPerson className="cartIcon"/></button>
        </LoginButton>
      }
    </>
  )
}

const LoginButton = styled.div`
  position: absolute;
  top: 23%;
  right: 25%;
  button{
    height: 50px;
    width: 230%;
    border-radius: 10px;
    border: 2px solid black;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  button:hover{
    transform: scale(1.05)
  }
`

export { Login }