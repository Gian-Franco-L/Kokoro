import React, { useContext } from "react"
import styled from "styled-components"
import forgotPasswordService from "../Services/forgotPassword"
import { AppContext } from "../Context/AppContext"
import { Link } from "wouter"
import "../CSS/Animation.css"

const ForgotPassword = () => {

  const {
    forgotPasswordEmail,
    setForgotPasswordEmail
  } = useContext(AppContext)

  let msjSuccess = document.querySelector("#success")
  let msjButton = document.querySelector("#button")
  let msjInput = document.querySelector("#input")

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(forgotPasswordEmail){
      msjInput.placeholder = "Email"
      msjInput.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      msjInput.classList.remove("redPlaceholder")
      const userEmail = {
        emailPassword: forgotPasswordEmail
      }
  
      forgotPasswordService.createForgotPassword(userEmail)
        .then(() =>{
          msjSuccess.innerHTML = "Revisa tu correo electronico."
          msjButton.innerHTML = "Correo enviado"
          msjButton.setAttribute("disabled","")
          msjInput.value = ""
        })
        .catch((err) =>{
        })
    }else{
      msjInput.placeholder = "No es un email correcto"
      msjInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjInput.classList.add("redPlaceholder")
    }
  }

  return(
    <Background>
      <MainContainer>
        <BorderContainer>
          <Button><Link href="/">Volver al inicio</Link>&nbsp;| ¿Has olvidado la contraseña?</Button>
          <h3>Recuperar cuenta</h3>
          <h5 id="success">Ingresa tu email para recuperar tu cuenta.</h5>
          <InputLabel>
            <label htmlFor="email" />
            <input
              id="input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={({target}) => setForgotPasswordEmail(target.value)}
              required
            />
          </InputLabel>
          <span><BorderContainerForgotPassword><button onClick={(event) => handleSubmit(event)} id="button">Enviar correo</button></BorderContainerForgotPassword></span>
        </BorderContainer>
      </MainContainer>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(44, 45, 49, 0.9);
`

const MainContainer = styled.form`
  height: 70%;
  width: 550px;
  background-color: #ebe9eb;
  border-radius: 20px;
  padding: 3px;

  h3{
    font-family: 'Festive', cursive;
    font-size: clamp(3rem, 18vw, 6rem);
    padding-top: 3%;
  }
  
  h5{
    width: 100%;
    font-size: clamp(.8rem, 4vw, 1.3rem);
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7%;
    width: 170px;
    padding: 3px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    :hover{
      transform: scale(1.05);
    }
    
    :active{
      box-shadow: 0px 0px 5px 1px #ab6f4a;
    }
  }
`

const BorderContainer   = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
  padding: 2%;

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;
    width: 85%;
    input{
      font-size: 1.3rem;
      background-color: #ebe9eb;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 2px solid black;
      outline: none;
      :hover{
        border-bottom: 2px solid #ab6f4a;
      }
    }
  }
`

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  input{
    font-size: clamp(.9rem, 2.2vw, 1.3rem);
    background-color: #ebe9eb;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid black;
    outline: none;
    :hover{
      border-bottom: 2px solid #ab6f4a;
    }
  }
`

const BorderContainerForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  button{
    height: 40px;
    width: 500px;
    font-size: clamp(.9rem, 2.2vw, 1rem);
    background-color: transparent;
    border: none;
    border-radius: 50px;
  }
`

const Button = styled.div`
  z-index: 1;
  position: absolute;
  font-size: clamp(.7rem, 3.5vw, 1.2rem);
  top: 1%;
  left: 3%;
  a{
    color: #AD8B73;
    text-decoration: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 820px){
    top: 1%;
    left: 2.5%;
  }
`

export { ForgotPassword }