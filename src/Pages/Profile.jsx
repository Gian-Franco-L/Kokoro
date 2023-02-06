import React, { useContext, useEffect } from "react"
import { PurchaseComponent } from "../Components/PurchaseComponent/PurchaseComponent"
import { AppContext } from "../Context/AppContext"
import {BsInfoSquare} from "react-icons/bs"
import { Link } from "wouter"
import { SwitchModal } from "../Components/SwitchModal/SwitchModal"
import userService from "../Services/user"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { closeCartOnProfile } from "../Components/Header/closeCartOnProfile"

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
          <Tittle><Link href="/"><Button>Volver</Button></Link><h2>Bienvenido a tu perfil</h2></Tittle>
          <UserProfile>
            <UserInfo>
              <section>
                <UserInfoItem>Usuario: <div>{userName}</div></UserInfoItem>
                <UserInfoItem>Nombre: <div>{name}</div></UserInfoItem>
                <UserInfoItem>Email: <div>{email}</div></UserInfoItem>
                <UserInfoItem>Contacto: <div>{phone}</div></UserInfoItem>
                <UserInfoItem><button onClick={nameSwitch}>Cambiar nombre de cuenta</button></UserInfoItem>
              </section>
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
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #ebe9eb;
`

const Tittle = styled.div`
  position: relative;
  display: flex;
  height: 80px;
  width: 60vw;
  margin-top: 44px;
  margin-left: 19%;
  padding-top: 10px;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: white;
  text-align: center;
  h2{
    font-size: 3rem;
    width: 65%;
  }
  @media only screen and (max-width: 820px){
    width: 90vw;
    margin-left: 4%;
  }
`

const UserProfile = styled.div`
  display: flex;
  @media only screen and (max-width: 820px){
    flex-direction: column;
    align-items: center;
  }
`

const UserInfo = styled.div`
  top: 44px;
  height: 42vh;
  width: 30vw;
  min-width: 330px;
  margin-top: 44px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: white;
  border-radius: 20px;
  section{
    margin-top: 1px;
    margin-left: 1px;
    height: 99.5%;
    width: 99.6%;
    border: 2px solid #CEAB93;
    border-radius: 20px;
  }
  @media only screen and (max-width: 820px){
    min-width: 95%;
  }
`

const UserPurchases = styled.div`
  min-height: 42vh;
  width: 62.5vw;
  margin-top: 44px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 40px;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: #b5b5b5;
  border-radius: 10px;
  @media only screen and (max-width: 820px){
    min-width: 95%;
  }
`
const WhiteContainer = styled.div`
  height: 100%;
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
  height: 30px;
  margin-top: 38px;
  font-size: 1.3rem;
  padding-left: 10px;
  margin-left: 6%;

  div{
    margin-left: 5%;
  }
  button{
    height: 45px;
    border: none;
    box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
    background-color: white;
    border-radius: 30px;
    :hover{
      transform: scale(1.05)
    }
  }
`

const Button = styled.div`
  z-index: 1;
  height: 50px;
  width: 135px;
  margin-top: 4px;
  margin-left: 7.1%;
  padding-top: 7px;
  padding-left: 5px;
  font-size: 1.6rem;
  border-radius: 30px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-color: white;
  cursor: pointer;
  a{
    color: black;
  }
  :hover{
    transform: scale(1.05)
  }
  @media only screen and (max-width: 820px){
    padding-top: 5px;
    margin-top: 7px;
    height: 45px;
    width: 120px;
    margin-left: 20px;
    margin-right: 5px;
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