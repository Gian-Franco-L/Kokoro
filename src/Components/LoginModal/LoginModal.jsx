import React, { useContext } from "react"
import styled from "styled-components"
import userService from "../../Services/user"
import loginService from "../../Services/login"
import { changeModalState, login, register } from "./Functions/LoginModalFunctions"
import validator from "validator"
import { Link } from "wouter"
import { MdClose } from "react-icons/md";
import { AppContext } from "../../Context/AppContext"
import { useGetUsersEmailsAndQuerySelectors } from "../../Hooks/useGetUsersEmailsAndQuerySelectors"

const LoginModal = () =>{
  const {
    setOpenLoginModal,
    setUserName,
    password,
    setPassword,
    passwordAgain,
    setPasswordAgain,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    emails,
    logUser,
    setLogUser,
    logPassword,
    setLogPassword,
    setToken,
    setAccess,
    loginRegisterElection,
    allUsers
  } = useContext(AppContext)

  const {
    body,
    registerUser,
    passwordRegister,
    passwordRegisterAgain,
    nameLastnameRegister,
    emailRegister,
    phoneRegister,
    userLoginInput,
    passwordLoginInput
  } = useGetUsersEmailsAndQuerySelectors()

  return(
    <Overlay>
      <ModalContainer loginRegisterElection={loginRegisterElection}>
        <section>
        {loginRegisterElection === "logIn" &&
          <Login>
            <CloseModalButton onClick={() => changeModalState(
              setOpenLoginModal,
              body,
              setLogUser,
              setLogPassword,
              setPasswordAgain,
              setName,
              setEmail,
              setPhone)} />
            <BorderContainerLogin>
              <h2>Inicio de sesión</h2>
              <h4>Inicia sesion si ya posees una cuenta registrada en nuestro sitio web.</h4>
              <form>
                <InputLabel>
                    <label htmlFor="user" />
                    <input
                      name="user"
                      type="text"
                      className=""
                      id="userLogin"
                      placeholder="Usuario"
                      onChange={({target}) => setLogUser(target.value)}
                      required
                    />
                </InputLabel>
                <InputLabel>
                    <label htmlFor="password" className="" />
                    <input
                      name="password"
                      type="password"
                      className=""
                      id="passwordLogin"
                      placeholder="Contraseña"
                      onChange={({target}) => setLogPassword(target.value)}
                      required
                    />
                </InputLabel>
                <span><BorderContainerRegisterButton><button onClick={(event) => login(
                  event,
                  logUser,
                  logPassword,
                  userLoginInput,
                  passwordLoginInput,
                  setLogPassword,
                  allUsers,
                  setLogUser,
                  loginService,
                  setUserName,
                  setOpenLoginModal,
                  body,
                  registerUser,
                  setName,
                  setEmail,
                  setToken,
                  setAccess
                )}>Iniciar sesión</button></BorderContainerRegisterButton></span>
              </form>
              <RecoveryLink><Link href="/forgotpassword">¿Has olvidado la contraseña?</Link></RecoveryLink>
            </BorderContainerLogin>
          </Login>
        }
        {loginRegisterElection === "register" &&
          <Register>
            <CloseModalButton onClick={() => changeModalState(
              setOpenLoginModal,
              body,
              setLogUser,
              setLogPassword,
              setPasswordAgain,
              setName,
              setEmail,
              setPhone)} />
            <BorderContainerRegister>
              <h2>Registro</h2>
              <h4>Bienvenido a nuestro sitio Web.</h4>
              <form>
                <InputLabel>
                  <label htmlFor="user" className="" />
                  <input
                    name="user"
                    type="text"
                    className=""
                    id="userRegister"
                    placeholder="Nombre de tu cuenta"
                    onChange={({target}) => setLogUser(target.value)}
                    required
                  />
                </InputLabel>
                <InputLabel>
                  <label htmlFor="password" className="" />
                  <input
                    name="password"
                    type="password"
                    className=""
                    id="passwordRegister"
                    placeholder="Contraseña"
                    onChange={({target}) => setPassword(target.value)}
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
                <InputLabel>
                  <label htmlFor="nameLastname" className="" />
                  <input
                    name="nameLastname"
                    type="text"
                    className=""
                    id="nameLastnameRegister"
                    placeholder="Nombre y apellido"
                    onChange={({target}) => setName(target.value)}
                    required
                  />
                </InputLabel>
                <InputLabel>
                  <label htmlFor="email" className="" />
                  <input
                    name="email"
                    type="email"
                    className=""
                    id="emailRegister"
                    placeholder="Email"
                    onChange={({target}) => setEmail(target.value)}
                    required
                  />
                </InputLabel>
                <InputLabel>
                  <label htmlFor="phone" className="" />
                  <input
                    name="phone"
                    type="text"
                    className=""
                    id="phoneRegister"
                    placeholder="Telefono"
                    onChange={({target}) => setPhone(target.value)}
                    required
                  />
                </InputLabel>
                <span><BorderContainerRegisterButton><button onClick={(event) => register(
                  event,
                  validator,
                  body,
                  allUsers,
                  emails,
                  logUser,
                  password,
                  name,
                  email,
                  phone,
                  passwordAgain,
                  userService,
                  registerUser,
                  passwordRegister,
                  passwordRegisterAgain,
                  nameLastnameRegister,
                  emailRegister,
                  phoneRegister,
                  loginService,
                  setOpenLoginModal,
                  setUserName,
                  setLogUser,
                  setPassword,
                  setPasswordAgain,
                  setName,
                  setEmail,
                  setToken,
                  setPhone,
                  setAccess
                )}>Registrarse</button></BorderContainerRegisterButton></span>
              </form>
            </BorderContainerRegister>
          </Register>
        }
        </section>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
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
  border-radius: 20px;
  width: 500px;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
  ${props => props.loginRegisterElection === "logIn" ? ("height: 70vh") : ("height: 90vh")}
`

const Login = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  padding: 5px;
  background-color: #ebe9eb;
  border-radius: 20px;
`

const BorderContainerLogin = styled.div`
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

  h2{
    font-size: clamp(3rem, 10vw, 4rem);
    font-family: 'Festive', cursive;
    @media only screen and (max-width: 300px) {
      font-size: 3rem;
    }
  }
  h4{
    font-size: clamp(.8rem, 4vw, 1.3rem);
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
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

  span{
    position: relative;
    height: 20%;
    width: 130px;
    left: calc(50% - 65px);
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
  button{
    background-color: transparent;
    border: none;
  }
`

const Register = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  padding: 5px;
  background-color: #ebe9eb;
  border-radius: 20px;
`

const BorderContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
  padding: 2%;

  h2{
    font-size: 5rem;
    font-family: 'Festive', cursive;
  }
  h4{
    font-size: clamp(.8rem, 4vw, 1.3rem);
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
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
      @media only screen and (max-width: 300px) {
        font-size: 1rem;
      }
    }
  }
  span{
    position: relative;
    height: 10%;
    width: 130px;
    left: calc(50% - 65px);
    margin-top: 5%;
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

const BorderContainerRegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
  button{
    height: 40px;
    width: 120px;
    background-color: transparent;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 1.5%;
  right: 2%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :hover{
    color: #AC8DAF;
  }
  @media only screen and (max-width: 991px) {
    top: 1.5%;
    right: 3%;
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: 280px) {
    top: 1.5%;
    right: 3%;
    button{
      font-size: 1.3rem;
    }
  }
`

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
`

const RecoveryLink = styled.div`
  a{
    text-decoration: none;
    color: black;
    :hover{
      color: #AC8DAF;
    }
  }
`

export { LoginModal }