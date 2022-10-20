import React from "react"
import styled from "styled-components"
import { IoMdPerson } from "react-icons/io"
import "../../../CSS/Animation.css"

const Login = () =>{
  return(
    <LoginButton>
      <button><IoMdPerson className="cartIcon"/></button>
    </LoginButton>
  )
}

const LoginButton = styled.div`
  position: absolute;
  left: 50px;
  button{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
    background-color: #f5f5f5;
  }
  button:hover{
    box-shadow: 0px 0px 10px 8px #FFFBE9;
  }
`

export { Login }