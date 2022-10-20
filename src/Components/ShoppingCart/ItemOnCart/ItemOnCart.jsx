import React, { useContext, useEffect } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import outOfCart from "./outOfCart"
import { MdOutlineCancel } from 'react-icons/md';
import "../../../CSS/react-icons.css"


const ItemOnCart = ({ item }) =>{
  const {
    articlesCart,
    setArticlesCart
  } = useContext(AppContext)


  return(
    <MainContainer>
      <i>{item.name}</i>
      <div>{item.amount>1 ? "x"+item.amount : null}</div>
      <Kick>
        {item.name.length>0 ? <button onClick={() => outOfCart(item.name, articlesCart, setArticlesCart)}><MdOutlineCancel className="removeItem"/></button> : null}
      </Kick>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 90%;
  left: 7%;
  margin-top: 10%;
  font-size: 1.2rem;

  div{
    margin-left: 5%;
  }
`
const Kick = styled.div`
  button{
    border: none;
    position: absolute;
    height: 20px;
    width: 20px;
    right: 5%;
    background-color: rgba(0, 0, 0, 0);
  }
`

export { ItemOnCart }