import React, { useContext } from "react"
import { user, openCloseLoginRegister } from "./Functions/LoginRegister"
import styled, { css } from "styled-components"
import { AppContext } from "../../Context/AppContext"

const LoginRegister = () =>{

  const {
    setOpenLoginModal,
    setLoginRegisterElection,
    loginRegisterSwitch,
    setLoginRegisterSwitch,
    setEnableDisableCollapse,
    setCartButtonEnableDisable,
    setSearchEnableDisable,
    loginRegisterStatus,
    setLoginregisterStatus
  } = useContext(AppContext)

  const body = document.getElementById("body")

  return(
    <MainContainer loginRegisterStatus={loginRegisterStatus} onClick={() => openCloseLoginRegister(
      loginRegisterSwitch,
      setLoginRegisterSwitch,
      setLoginregisterStatus,
      setEnableDisableCollapse,
      setCartButtonEnableDisable,
      setSearchEnableDisable)}>
      <LogIn onClick={() => user("logIn", setOpenLoginModal, setLoginRegisterElection, body)}>Iniciar Sesion</LogIn>
      <Register onClick={() => user("register", setOpenLoginModal, setLoginRegisterElection, body)}>Registrarse</Register>
    </MainContainer>
  )
}

const desapearLoginRegister = css`
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: space-around;
  height: 6.1vh;
  width: 19%;
  right: 17.6%;
  top: 0%;
  background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
  border-bottom: 2px solid #AC8DAF;
  border-right: 1px solid #AC8DAF;
  border-left: 1px solid #AC8DAF;
  transition: 1s;
  transition-delay: 0.3s;

  @media only screen and (max-width: 1220px){
    right: 18.5%;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    left: 0%;
  }
`

const apearLoginRegister = css`
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: space-around;
  height: 6vh;
  width: 19%;
  right: 17.6%;
  top: 8.6%;
  background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
  border-bottom: 2px solid #AC8DAF;
  border-right: 1px solid #AC8DAF;
  border-left: 1px solid #AC8DAF;
  transition: 1s;
  transition-delay: 0.3s;

  @media only screen and (max-width: 1220px){
    right: 18.5%;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    left: 0%;
    top: 241px;
    border-right: none;
    border-left: none;
  }
`

const MainContainer = styled.div`
  ${props => props.loginRegisterStatus === "off" ? desapearLoginRegister : apearLoginRegister }
`

const LogIn = styled.div  `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 1%;
  border-right: 1px solid #AC8DAF;
  cursor: pointer;
  
  :hover{
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 1220px){
    font-size: .8rem;
    :hover{
      font-size: .9rem;
    }
  }
  @media only screen and (max-width: 991px){
    font-size: 1rem;
    :hover{
      font-size: 1.1rem;
    }
  }
`

const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 1%;
  cursor: pointer;

  :hover{
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 1220px){
    font-size: .8rem;
    :hover{
      font-size: .9rem;
    }
  }
  @media only screen and (max-width: 991px){
    font-size: 1rem;
    :hover{
      font-size: 1.1rem;
    }
  }
`

export { LoginRegister }