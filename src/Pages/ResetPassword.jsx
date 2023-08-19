import React, { useContext } from "react"
import { handleSubmit } from "./Functions/ResetPasswordFunctions"
import styled from "styled-components"
import resetPasswordService from "../Services/resetPassword"
import { AppContext } from "../Context/AppContext"

const ResetPassword = ({ id, token }) => {

  const {
    passwordAgain,
    setPasswordAgain,
    newPassword,
    setNewPassword,
    resetPasswordRegister,
    setResetPasswordRegister
  } = useContext(AppContext)

  let passwordRegisterAgain = document.querySelector("#passwordRegisterAgain")
  let msjError = document.querySelector("#msj")

  return(
    <Background>
      <MainContainer>
        <BorderContainer>
          <h3>Nueva contraseña</h3>
          <h5 id="msj">Ingresa tu nueva contraseña</h5>
          <InputLabel>
            <label htmlFor="password" className="" />
            <input
              name="password"
              type="password"
              className=""
              resetPasswordRegister={resetPasswordRegister}
              placeholder="Contraseña"
              onChange={({target}) => setNewPassword(target.value)}
              required
            />
          </InputLabel>
          <InputLabel>
            <label htmlFor="passwordAgain" className="" />
            <input
              name="passwordAgain"
              type="password"
              className=""
              id="passwordRegisterAgain"
              placeholder="Repite la contraseña"
              onChange={({target}) => setPasswordAgain(target.value)}
              required
            />
          </InputLabel>
          <span>
            <BorderContainerForgotPassword><button onClick={(event) => handleSubmit(
              event,
              newPassword,
              passwordAgain,
              setResetPasswordRegister,
              passwordRegisterAgain,
              id,
              token,
              resetPasswordService,
              msjError)}>Cambiar contraseña</button>
            </BorderContainerForgotPassword>
          </span>
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
  background: rgba(52, 48, 41, 0.8);
`

const MainContainer = styled.form`
  height: 70%;
  width: 550px;
  background-color: #ebe9eb;
  border-radius: 20px;
  padding: 3px;

  h3{
    font-family: 'Festive', cursive;
    font-size: clamp(3rem, 10vw, 5.5rem);
    padding-top: 3%;
  }

  h5{
    width: 100%;
    font-size: clamp(.9rem, 2.2vw, 1.3rem);
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.5%;
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
  box-shadow: ${props => props.resetPasswordRegister === true ? "0px 0px 5px 1px #AC8DAF" : "0px 0px 5px 1px #bb3b3b"};
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

const BorderContainerForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
  button{
    font-size: clamp(.9rem, 2.2vw, 1rem);
    background-color: transparent;
    border: none;
    border-radius: 50px;
  }
`

export { ResetPassword }