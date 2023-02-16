import React, { useContext, useEffect } from "react"
import { PurchaseComponent } from "../Components/PurchaseProfile/PurchaseProfile"
import { AppContext } from "../Context/AppContext"
import {BsInfoSquare} from "react-icons/bs"
import {MdOutlineChangeCircle} from "react-icons/md"
import { Link } from "wouter"
import { SwitchModal } from "../Components/SwitchModal/SwitchModal"
import userService from "../Services/user"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { closeCartOnProfile } from "../Components/Header/closeCartOnProfile"
import "../CSS/profile.css"

const Profile = () => {
  const {
    userName,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    setUserName,
    switchElection,
    setSwitchElection,
    password,
    setPassword,
    logPassword,
    newSwitch,
    setNewSwitch,
    purchaseItems,
    setPurchaseItems,
    cartSwitch,
    setCartSwitch,
    articlesCart,
    setOnOffCartButton,
    setArticlesCart
  } = useContext(AppContext)
  
  useEffect(() =>{
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      setUserName(JSON.parse(loggedUserJSON).userName)
      setName(JSON.parse(loggedUserJSON).name)
      setEmail(JSON.parse(loggedUserJSON).email)
      setPhone(JSON.parse(loggedUserJSON).phone)
    }
    if(cartSwitch === "on"){
      closeCartOnProfile(
        articlesCart,
        setOnOffCartButton,
        setCartSwitch,
        setArticlesCart
      )
    }
  }, [])

  useEffect(() =>{
    if(userName !== null){
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      userService.getAllUsers(JSON.parse(loggedUserJSON).userName)
        .then(res => {
          setPurchaseItems(res.filter(user => user.userName === userName).map(user => user.purchase).flat())
        })
    }
  }, [userName])

  function nameSwitch(){
    setSwitchElection("nombre")
  }

  return(
    <LayoutContainer>
      {userName ?
        <>
          <Tittle><h2>Bienvenido a tu perfil</h2></Tittle>
          <UserProfile>
            <Button><Link href="/">Volver al inicio</Link>&nbsp;| Perfil</Button>
            <UserInfo>
              <BorderContainer>
                <UserInfoItem>Usuario: <div>{userName}</div></UserInfoItem>
                <UserInfoItem>Nombre: <div>{name}</div></UserInfoItem>
                <UserInfoItem>Email: <div>{email}</div></UserInfoItem>
                <UserInfoItem>Contacto: <div>{phone}</div></UserInfoItem>
                <ChangeCircle onClick={nameSwitch}/>
              </BorderContainer>
            </UserInfo>
            <UserPurchases>
              {purchaseItems !== 0 && purchaseItems.map(purchases =>(
                <PurchaseComponent
                  purchases={purchases}
                  key={uuidv4()}
                />
              ))}
              { purchaseItems.length === 0 && 
                <WhiteContainer>
                  <EmptyContainer><EmptyIcon />No hay ninguna compra registrada</EmptyContainer>
                </WhiteContainer>
              }
            </UserPurchases>
          </UserProfile>
          {switchElection &&
            <SwitchModal
            userName={userName}
            password={password}
            switchElection={switchElection}
            newSwitch={newSwitch}
            setUserName={setUserName}
            setPassword={setPassword}
            logPassword={logPassword}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setSwitchElection={setSwitchElection}
            setNewSwitch={setNewSwitch}
            />
          }
        </>
         : <Error><div>Debes registrarte antes de entrar a tu perfil</div><Link href="/"><button>Volver</button></Link></Error>
      }
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebe9eb;
`

const Tittle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;

  h2{
    width: 100%;
    font-family: 'Festive', cursive;
    font-size: clamp(2rem, 13vw, 7rem);
  }
  @media only screen and (max-width: 1230px){
    margin-top: 7%;
  }
`

const UserProfile = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 820px){
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const UserInfo = styled.div`
  position: sticky;
  top: 44px;
  height: 42vh;
  width: 30%;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: white;
  border-radius: 20px;
  padding: 2px;
  @media only screen and (max-width: 820px){
    position: relative;
    top: -10px;
    width: 90%;
  }
`

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
`

const UserPurchases = styled.div`
  min-height: 42%;
  width: 62.5vw;
  margin-bottom: 40px;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: #b5b5b5;
  border-radius: 10px;
  @media only screen and (max-width: 820px){
    width: 90%;
  }
`
const WhiteContainer = styled.div`
  height: 42vh;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 1px;
`
const EmptyContainer = styled.div`
  display: flex;
  height: 99.9%;
  width: 99.9%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 2px solid #CEAB93;
  border-radius: 10px;
  background-color: white;
`
const EmptyIcon = styled(BsInfoSquare)`
  margin-right: 1%;
  color: #AD8B73;
`

const UserInfoItem = styled.div`
  display: flex;
  font-size: clamp(.5rem, 6vw, 1.4rem);
  padding-left: 10px;
  margin-left: 6%;

  div{
    margin-left: 5%;
  }
`

const ChangeCircle = styled(MdOutlineChangeCircle)`
  position: absolute;
  top: 34.5%;
  left: 2%;
  height: 25px;
  width: 25px;
  cursor: pointer;
  :hover{
    color: #ab6f4a;
    transform: rotateZ(180deg);
    transition: .5s;
  }
  @media only screen and (max-width: 350px){
    top: 35%;
    height: 20px;
    width: 20px;
  }
`

const Button = styled.div`
  z-index: 1;
  position: absolute;
  font-size: clamp(.7rem, 1.7vw, 1.3rem);
  top: 2%;
  left: 2%;
  a{
    color: #AD8B73;
    text-decoration: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 820px){
    top: .5%;
  }
`
const Error = styled.div`
  z-index: 10000;
  position: fixed;
  display: flex;
  text-align: center;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  justify-content: center;
  align-items: center;
  background: rgba(32, 35, 51, 0.9);
  

  div{
    height: 200px;
    width: 500px;
    background-color: white;
    font-size: 2rem;
    padding-top: 1%;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px #ab6f4a;
  }
  button{
    z-index: 1;
    position: absolute;
    height: 50px;
    width: 135px;
    margin-top: 6%;
    padding-left: 5px;
    font-size: 1.6rem;
    border-radius: 30px;
    box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
    background-color: white;
    border: none;
    cursor: pointer;
    a{
      color: black;
    }
    :hover{
      transform: scale(1.05)
    }
  }
`

export { Profile }