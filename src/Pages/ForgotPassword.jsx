import React, { useContext } from "react"
import styled from "styled-components"
import forgotPasswordService from "../Services/forgotPassword"
import { handleSubmit } from "./Functions/ForgotPasswordFunctions"
import { AppContext } from "../Context/AppContext"
import { Link } from "wouter"

const ForgotPassword = () => {

  const {
    forgotPasswordEmail,
    setForgotPasswordEmail,
    forgotPasswordMsjInput,
    setForgotPasswordMsjInput
  } = useContext(AppContext)

  return(
    <Background>
      <ModalContainer>
        <MainContainer>
          <BorderContainer>
            <Button><Link href="/">Volver al inicio</Link>&nbsp;| ¿Has olvidado la contraseña?</Button>
            <h3>Recuperar cuenta</h3>
            <h5 id="success">Ingresa tu email para recuperar tu cuenta.</h5>
            <InputLabel>
              <label htmlFor="email" />
              <MsjInput
                name="email"
                id="msjInput"
                type="email"
                placeholder={forgotPasswordMsjInput.placeholder}
                onChange={({target}) => setForgotPasswordEmail(target.value)}
                required
                forgotPasswordMsjInput={forgotPasswordMsjInput}
              />
            </InputLabel>
            <span>
              <BorderContainerForgotPassword>
                <button onClick={(event) => (handleSubmit(
                  event,
                  forgotPasswordEmail,
                  forgotPasswordMsjInput,
                  setForgotPasswordMsjInput,
                  forgotPasswordService,
                  setForgotPasswordEmail), document.getElementById('msjInput').value = '')} id="button">Enviar correo
                </button>
              </BorderContainerForgotPassword>
            </span>
          </BorderContainer>
        </MainContainer>
      </ModalContainer>
    </Background>
  )
}

const Background = styled.div`
  z-index: 10000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background: rgba(52, 48, 41, 0.8);
`

const ModalContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 550px;
  border-radius: 20px;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`

const MainContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  padding: 5px;
  background-color: #ebe9eb;
  border-radius: 20px;

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
    box-shadow: 0px 0px 5px 5px #AC8DAF;
    :hover{
      transform: scale(1.05);
    }
    
    :active{
      box-shadow: 0px 0px 5px 5px #AC8DAF;
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
  border: 2px solid #AC8DAF;
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
        border-bottom: 2px solid #AC8DAF;
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
      border-bottom: 2px solid #AC8DAF;
    }
  }
`

const MsjInput = styled.input`
  box-shadow: ${props => props.forgotPasswordMsjInput.boxShadow === true ? "0px 0px 5px 1px #AC8DAF" : "0px 0px 5px 1px #bb3b3b"};

  &::-webkit-input-placeholder{
    color: ${props => props.forgotPasswordMsjInput.redPlaceholder === true && "rgb(199, 56, 56)"}
  }
`

const BorderContainerForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
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
    color: #AC8DAF;
    text-decoration: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 820px){
    top: 1%;
    left: 2.5%;
  }
`

export { ForgotPassword }