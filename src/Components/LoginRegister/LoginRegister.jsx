import React from "react"
import styled from "styled-components"
import "../../CSS/Animation.css"

const LoginRegister = ({
  setOpenLoginModal,
  setLoginRegisterElection,
  loginRegisterSwitch,
  setLoginRegisterSwitch,
  loginRegisterRef,
  cartButtonRef,
  searchRef,
  enableDisableCollapse,
  setModalScroll
}) =>{

  const body = document.getElementById("body")

  const user = (election)=>{
    setOpenLoginModal(true)
    setLoginRegisterElection(election)
    body.style.overflowY = "hidden"
  }

  const openCloseLoginRegister = () =>{
    if(loginRegisterSwitch === "off"){
      setLoginRegisterSwitch("on")
      loginRegisterRef.current.className = "apearLoginRegister"
    }
    if(loginRegisterSwitch === "on"){
      setLoginRegisterSwitch("off")
      loginRegisterRef.current.className = "startingLoginRegister"
      enableDisableCollapse.current.style.display = "none"
      cartButtonRef.current.removeAttribute("disabled");
      cartButtonRef.current.style.opacity = "1"
      searchRef.current.removeAttribute("disabled");
      searchRef.current.style.opacity = "1"
    }
  }

  return(
    <div className="startingLoginRegister" onClick={openCloseLoginRegister} ref={loginRegisterRef}>
      <LogIn onClick={() => user("logIn")}><h3>Iniciar Sesion</h3></LogIn>
      <Register onClick={() => user("register")}><h3>Registrarse</h3></Register>
    </div>
  )
}

const LogIn = styled.div  `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 1%;
  border-right: 1px solid #AD8B73;
  cursor: pointer;
  :hover{
    font-size: 1.1rem;
  }
  h3{
    font-size: 1.4rem;
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
  h3{
    font-size: 1.4rem;
  }
`

export { LoginRegister }