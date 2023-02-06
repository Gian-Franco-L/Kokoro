import React, { useEffect } from "react"
import styled from "styled-components"
import "../../CSS/Animation.css"
import userService from "../../Services/user"
import loginService from "../../Services/login"
import validator from "validator"

const LoginModal = ({
  setOpenLoginModal,
  userName,
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
  setEmails,
  logUser,
  setLogUser,
  logPassword,
  setLogPassword,
  setToken,
  loginRegisterElection,
  allUsers,
  setAllUsers,
  modalScroll
}) =>{
  
  let registerUser = document.querySelector("#userRegister")
  let passwordRegister = document.querySelector("#passwordRegister")
  let passwordRegisterAgain = document.querySelector("#passwordRegisterAgain")
  let nameLastnameRegister= document.querySelector("#nameLastnameRegister")
  let emailRegister= document.querySelector("#emailRegister")
  let phoneRegister= document.querySelector("#phoneRegister")
  const userLoginInput = document.getElementById("userLogin")
  const passwordLoginInput = document.getElementById("password")
  const msjUserId = document.getElementById("msjUser")
  const msjAgain = document.getElementById("msjAgain")
  const msjEmailId = document.getElementById("msjEmail")
  const msjPhoneId = document.getElementById("msjPhoneId")

  useEffect(() =>{
    userService.getAllUsers().then(res => {
      const mail = res.map(mail => mail.email)
      setEmails(mail)
    })
    userService.getAllUsers().then(res => {
      setAllUsers(res.filter(userInfo => userInfo.userName))
    })
  }, [setEmails, email, setAllUsers])

  function changeModalState(){
    setOpenLoginModal(false)

    const media = window.matchMedia('(max-width: 992px)')
    if(media.matches){
      document.body.style.position = ''
      window.scrollTo(0, modalScroll)
    }
  }

  async function login (event){
    event.preventDefault()

    const isUserNameLogged = allUsers.filter(user => user.userName === logUser)
    
    if(!isUserNameLogged.length){
      userLoginInput.style.color = "#bb3b3b"
      userLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      passwordLoginInput.style.color = "black"
      passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      return 0
    }

    try{
      const user = await loginService.login({
        logUser,
        logPassword
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setUserName(logUser)
      
      setOpenLoginModal(false)
      userLoginInput.style.color = "black"
      userLoginInput.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordLoginInput.style.color = "black"
      passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
    } catch(e){
      userLoginInput.style.color = "black"
      userLoginInput.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordLoginInput.style.color = "#bb3b3b"
      passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    }
    setLogUser()
    setLogPassword()
  }

  
  async function register (event){
    event.preventDefault()

    const isUserNameLogged = allUsers.filter(user => user.userName === logUser)
    const isEmailLogged = emails.filter(value => value === email)
    const isNumber = /^([0-9 +-])*$/.exec(phone)

    if(!logUser){
      registerUser.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      return 0
    }
    if(!!isUserNameLogged.length){
      registerUser.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "inline"
      return 0
    }
    if(!password){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      return 0
    }
    if(!passwordAgain){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      return 0
    }
    if(password !== passwordAgain){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "inline"
      return 0
    }
    if(!name){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      return 0
    }
    if(!email){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      return 0
    }
    if(!validator.isEmail(email)){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      return 0
    }
    if(!!isEmailLogged.length){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      msjEmailId.style.display = "inline"
      return 0
    }
    if(!phone){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      phoneRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      msjEmailId.style.display = "none"
      return 0
    }
    if(isNumber === null){
      registerUser.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
      phoneRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      msjUserId.style.display = "none"
      msjAgain.style.display = "none"
      msjEmailId.style.display = "none"
      msjPhoneId.style.display = "inline"
      return 0
    }

    phoneRegister.style.boxShadow = "0px 0px 5px 1px #ab6f4a"
    msjPhoneId.style.display = "none"

    const completeUser = {
      userName: logUser,
      password: password,
      name: name,
      email: email,
      phone: phone,
      cartItem: []
    }
    await userService.createUser(completeUser)

    try{
      const user = await loginService.login({
        logUser: logUser,
        logPassword: password
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
        )
        setOpenLoginModal(false)
      } catch(e){
      console.error(e);
    }
    
    registerUser.value = ''
    passwordRegister.value = ''
    passwordRegisterAgain.value = ''
    nameLastnameRegister.value = ''
    emailRegister.value = ''
    phoneRegister.value = ''
    setUserName(logUser)
    setLogUser()
    setPassword()
    setPasswordAgain()
    setName()
    setEmail()
    setPhone()
  }
  return(
    <Overlay>
      <ModalContainer loginRegisterElection={loginRegisterElection}>
        <section>
        {loginRegisterElection === "logIn" &&
          <Login>
            <CloseModalButton>
              <button onClick={changeModalState}>X</button>
            </CloseModalButton>
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
                      id="password"
                      placeholder="Contraseña"
                      onChange={({target}) => setLogPassword(target.value)}
                      required
                    />
                </InputLabel>
              </form>
              <span><BorderContainerRegisterButton><button onClick={(event) => register(event)}>Iniciar sesión</button></BorderContainerRegisterButton></span>
            </BorderContainerLogin>
          </Login>
        }
        {loginRegisterElection === "register" &&
          <Register>
            <CloseModalButton>
              <button onClick={changeModalState}>X</button>
            </CloseModalButton>
            <BorderContainerRegister>
              <h2>Registro</h2>
              <h4>Bienvenido a nuestro sitio Web.</h4>
              <form>
                <InputLabel>
                  <MsjUser id="msjUser">Ya existe una cuenta con este usuario</MsjUser>
                  <label htmlFor="user" className="" />
                  <input
                    name="user"
                    type="text"
                    className=""
                    id="userRegister"
                    placeholder="Nombre para tu cuenta"
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
                  <MsjAgain id="msjAgain">Las contraseñas son diferentes</MsjAgain>
                  <label htmlFor="passwordAgain" className="" />
                  <input
                    name="passwordAgain"
                    type="passwordAgain"
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
                  <MsjEmail id="msjEmail">Ya existe una cuenta con este email</MsjEmail>
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
                  <MsjPhoneId id="msjPhoneId">Solo numeros permitidos</MsjPhoneId>
                  <label htmlFor="phone" className="" />
                  <input
                    name="phone"
                    type="text"
                    className=""
                    id="phoneRegister"
                    placeholder="Telefono: 011 XXXX-XXXX"
                    onChange={({target}) => setPhone(target.value)}
                    required
                  />
                </InputLabel>
              </form>
              <span><BorderContainerRegisterButton><button onClick={(event) => register(event)}>Registrarse</button></BorderContainerRegisterButton></span>
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
  background: rgba(32, 35, 51, 0.9);
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
  border: 2px solid #CEAB93;
  border-radius: 20px;
  padding: 2%;

  h2{
    font-size: 4rem;
    font-family: 'Festive', cursive;
    @media only screen and (max-width: 300px) {
      font-size: 3rem;
    }
  }
  h4{
    @media only screen and (max-width: 300px) {
      font-size: 1.2rem;
    }
  }
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

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8%;
    width: 130px;
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
  button{
    background-color: transparent;
    border: none;
  }
`

const BorderContainerLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 124px;
  margin-left: -2%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  @media (hover: none){
    margin-left: -2%;
    margin-right: -2%;
    margin-top: .5%;
  }
`

const Register = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  padding: 5px;
  background-color: #ebe9eb;
  border-radius: 20px;
`

const BorderContainerRegister = styled.div`
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

  h2{
    font-size: 4.5rem;
    font-family: 'Festive', cursive;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55%;
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
      @media only screen and (max-width: 300px) {
        font-size: 1rem;
      }
    }
  }
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6%;
    width: 130px;
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
  button{
    background-color: transparent;
    border: none;
  }
`

const BorderContainerRegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
`

const CloseModalButton = styled.div`
  position: absolute;
  top: 1%;
  right: 2.5%;
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.5rem;
    :hover{
      color: #ab6f4a;
    }
  }
`

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
`

const MsjUser = styled.div`
  display: none;
  position: absolute;
  height: 25px;
  top: 180px;
  left: 20%;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1.1rem;
  background-color: white;
`

const MsjAgain = styled.div`
  display: none;
  position: absolute;
  height: 25px;
  top: 368px;
  left: 39%;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1.1rem;
  background-color: white;
`

const MsjEmail = styled.div`
  display: none;
  position: absolute;
  height: 25px;
  bottom: 220px;
  left: 17%;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1.1rem;
  background-color: white;
`

const MsjPhoneId = styled.div`
  display: none;
  position: absolute;
  height: 25px;
  bottom: 125px;
  left: 39%;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1.1rem;
  background-color: white;
`

export { LoginModal }