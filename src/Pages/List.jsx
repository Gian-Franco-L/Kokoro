import React, { useContext, useEffect } from "react"
import { AppContext } from "../Context/AppContext"
import { ListOfPurchases } from "../Components/ListOfPurchases/ListOfPurchases"
import { Link } from "wouter"
import styled from "styled-components"
import userService from "../Services/user"

const List = () =>{
  const {
    userName,
    setUserName,
    access,
    setAccess,
    purchaseItems,
    setPurchaseItems
  } = useContext(AppContext)

  useEffect(() =>{
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      setUserName(JSON.parse(loggedUserJSON).userName)
      setAccess(JSON.parse(loggedUserJSON).access)
    }
  }, [])

  useEffect(() =>{
    if(userName !== null){
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      userService.getAllUsers(JSON.parse(loggedUserJSON).userName)
        .then(res => setPurchaseItems(res))
    }
  }, [userName])

  return(
    <>
     {(access === "no" && access === undefined)
        ? <Error><div>No tienes acceso a esta dirección</div><Link href="/"><button>Volver</button></Link></Error>
        : <ListOfPurchases purchaseItems={purchaseItems} />
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
  background: rgba(33, 20, 20, 0.9);
  

  div{
    height: 200px;
    width: 600px;
    background-color: #fff0f0;
    font-size: 2rem;
    padding-top: 1.5%;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px #ab6f4a;
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