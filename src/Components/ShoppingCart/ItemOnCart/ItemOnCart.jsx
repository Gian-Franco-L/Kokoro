import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import outOfCart from "./outOfCart"

const ItemOnCart = ({ item }) =>{
  const {
    articlesCart,
    setArticlesCart,
  } = useContext(AppContext)
  
  return(
    <MainContainer>
      {item.name}
      {item.amount>1 ? item.amount : null}
      <Kick>
        {item.name.length>0 ? <button onClick={() => outOfCart(item.name, articlesCart, setArticlesCart)}></button> : null}
      </Kick>
    </MainContainer>
    
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 15px;
  width: 100px;
  left: 15%;
  margin-top: 10%;
  max-width: 100px;
`
const Kick = styled.div`
  button{
    height: 16px;
    width: 10px;
  }
`

export { ItemOnCart }