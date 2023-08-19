import React, { useContext } from "react"
import { PurchaseProfile } from "../Components/PurchaseProfile/PurchaseProfile"
import { AppContext } from "../Context/AppContext"
import {BsInfoSquare} from "react-icons/bs"
import {MdOutlineChangeCircle} from "react-icons/md"
import { Link } from "wouter"
import { SwitchModal } from "../Components/SwitchModal/SwitchModal"
import { nameSwitch } from "./Functions/ProfileFunctions"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import "../CSS/profile.css"
import { Skeletons } from "../Components/PurchaseProfile/SkeletonItems/Skeletons"
import { UserNotFound } from "../Components/UserNotFound/UserNotFound"
import { useUpdateLocalStorage } from "../Hooks/useUpdateLocalStorage"
import { useCloseCart } from "../Hooks/useCloseCart"
import { useGetUserPurchaseItems } from "../Hooks/useGetUserPurchaseItems"
import { AiFillStar } from "react-icons/ai"

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
    token,
    switchElection,
    setSwitchElection,
    password,
    setPassword,
    logPassword,
    newSwitch,
    setNewSwitch,
    purchaseItems
  } = useContext(AppContext)

  useUpdateLocalStorage()
  useCloseCart()
  useGetUserPurchaseItems()

  return(
    <LayoutContainer>
      {userName ?
        <>
          <Tittle><h2><Star1 /><Star2 /><Star3 />Bienvenido a tu perfil</h2></Tittle>
          <UserProfile>
            <Button><Link href="/">&#60;-Volver al inicio</Link></Button>
            <UserInfo>
              <BorderContainer>
                <UserInfoItem>Usuario: <div>{userName}</div></UserInfoItem>
                <UserInfoItem>Nombre: <div>{name}</div></UserInfoItem>
                <UserInfoItem>Email: <div>{email}</div></UserInfoItem>
                <UserInfoItem>Contacto: <div>{phone}</div></UserInfoItem>
                <UserInfoItem>Cambiar nombre: <ChangeCircle onClick={() => nameSwitch(setSwitchElection)}/></UserInfoItem>
              </BorderContainer>
            </UserInfo>
            <UserPurchases>
              {
                purchaseItems.length === undefined
                  &&  <Skeletons />
              }
              {
                purchaseItems !== 0 
                  &&  purchaseItems.map(purchases =>(
                        <PurchaseProfile
                          purchases={purchases}
                          token={token}
                          key={uuidv4()}
                        />
                      ))
              }
              { 
                purchaseItems.length === 0
                  &&  <WhiteContainer>
                        <EmptyContainer><EmptyIcon />Sin registro de compras</EmptyContainer>
                      </WhiteContainer>
              }
            </UserPurchases>
          </UserProfile>
          {
          switchElection
            &&  <SwitchModal
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
         : <UserNotFound />
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
    position: relative;
    font-family: 'Festive', cursive;
    font-size: clamp(2rem, 13vw, 6rem);
  }
  @media only screen and (max-width: 1230px){
    margin-top: 12%;
  }
  @media only screen and (max-width: 991px){
    margin-top: 15%;
    margin-bottom: 6%;
  }
`

const Star1 = styled(AiFillStar)`
  position: absolute;
  left: 10.5%;
  top: 25%;
  font-size: clamp(.5rem, 3vw, 1.3rem);
  color: #AC8DAF;
  background-color: #ebe9eb;

  @media only screen and (max-width: 236px){
    display: none;
  }
`
const Star2 = styled(AiFillStar)`
  position: absolute;
  left: 36.7%;
  top: 25%;
  font-size: clamp(.5rem, 3vw, 1.3rem);
  color: #AC8DAF;
  background-color: #ebe9eb;

  @media only screen and (max-width: 236px){
    display: none;
  }
`
const Star3 = styled(AiFillStar)`
  position: absolute;
  left: 93.2%;
  top: 25%;
  font-size: clamp(.5rem, 3vw, 1.3rem);
  color: #AC8DAF;
  background-color: #ebe9eb;

  @media only screen and (max-width: 236px){
    display: none;
  }
`

const UserProfile = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 1360px){
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
  box-shadow: 0px 0px 8px 8px #AC8DAF;
  background-color: white;
  border-radius: 20px;
  padding: 2px;
  @media only screen and (max-width: 1360px){
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
  border: 2px solid #AC8DAF;
  border-radius: 20px;
`

const UserPurchases = styled.div`
  min-height: 42%;
  width: 62.5vw;
  margin-bottom: 150px;
  box-shadow: 0px 0px 8px 8px #AC8DAF;
  background-color: #AC8DAF;
  border-radius: 10px;
  @media only screen and (max-width: 1360px){
    width: 90%;
  }
`
const WhiteContainer = styled.div`
  height: 42vh;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 1.5px;
`
const EmptyContainer = styled.div`
  display: flex;
  height: 99.9%;
  width: 99.9%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
  background-color: white;
  font-size: clamp(.5rem, 6vw, 2rem);
`
const EmptyIcon = styled(BsInfoSquare)`
  margin-right: 1%;
  color: #AC8DAF;
`

const UserInfoItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(.5rem, 5vw, 1.4rem);
  padding-left: 10px;
  margin-left: 5%;

  div{
    margin-left: 2%;
  }
  @media only screen and (max-width: 991px){
    margin-left: 1%;
  }
`

const ChangeCircle = styled(MdOutlineChangeCircle)`
  position: relative;
  height: 25px;
  width: 25px;
  margin-top: 1%;
  margin-left: 5%;
  cursor: pointer;
  :hover{
    color: #70416D;
    transform: rotateZ(180deg);
    transition: .5s;
  }
  @media only screen and (max-width: 380px){
    height: 20px;
    width: 20px;
  }
`

const Button = styled.div`
  z-index: 1;
  position: absolute;
  font-size: clamp(1.1rem, 2vw, 2rem);
  top: 2%;
  left: 2%;
  a{
    color: #AC8DAF;
    text-decoration: none;
    cursor: pointer;

    :hover{
      color: #70416D;
    }
  }
  
  @media only screen and (max-width: 820px){
    top: 1%;
    left: 2.5%;
  }
`

export { Profile }