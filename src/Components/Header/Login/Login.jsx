import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import { IoMdPerson } from "react-icons/io"
import "../../../CSS/Animation.css"

const Login = () =>{

  const {
    userName,
    setOpenLoginModal
  } = useContext(AppContext)

  function changeModalState(){
    setOpenLoginModal(true)
  }

  return(
    <>
      {!userName &&
        <LoginButton onClick={changeModalState}>
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