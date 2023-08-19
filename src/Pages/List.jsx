import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { ListOfPurchases } from "../Components/ListOfPurchases/ListOfPurchases"
import { Link } from "wouter"
import styled from "styled-components"
import { UserNotFound } from "../Components/UserNotFound/UserNotFound"
import { useUpdateLocalStorage } from "../Hooks/useUpdateLocalStorage"
import { useGetAllPurchaseItems } from "../Hooks/useGetAllPurchaseItems"
import { AccessDenied } from "../Components/AccessDenied/AccessDenied"

const List = () =>{
  const {
    userName,
    access
  } = useContext(AppContext)

  useUpdateLocalStorage()
  useGetAllPurchaseItems()

  return(
    <>
     {userName
      ? (access === "no" || access === undefined)
        ? <AccessDenied />
        : <ListOfPurchases />
      : <UserNotFound />
      } 
      </>
  )
}

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
  background: rgba(52, 48, 41, 0.8);
  

  div{
    height: 200px;
    width: 600px;
    background-color: #fff0f0;
    font-size: 2rem;
    padding-top: 1.5%;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px #AC8DAF;
  }
  button{
    z-index: 1;
    position: absolute;
    height: 50px;
    width: 135px;
    margin-top: 4.5%;
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

export { List }