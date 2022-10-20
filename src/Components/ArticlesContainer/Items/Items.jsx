import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import addToCart from "./addToCart"
import { BsFillCartPlusFill } from "react-icons/bs"
import "../../../CSS/react-icons.css"

const Items = ({ items, itemsPrice }) =>{
  const {
    articlesCart,
    setArticlesCart,
    setOpenModal,
    setModalArticle,
    cartSwitch,
    itemCartAux,
    setItemCartAux
  } = useContext(AppContext)

  function changeModalState(){
    setOpenModal(true)
    setModalArticle({'item': items, 'itemsPrice': itemsPrice})
  }

  return(
    <MainContainer>
      <ArticleItem onClick={changeModalState}/>
      <ArticleInfo>
        <ItemName>{items}</ItemName>
        <ItemPrice>{itemsPrice}</ItemPrice>
        <AddToCartButton><button onClick={() => addToCart(items, itemsPrice, articlesCart, setArticlesCart, cartSwitch, itemCartAux, setItemCartAux)}><BsFillCartPlusFill className="addToCartButton"/></button></AddToCartButton>
      </ArticleInfo>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  height: 259px;
  width: 232px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 5%;
  background-color: #f5f5f5;
  box-shadow: 3px 3px 10px -3px #d7b069;
  border: 2px solid #E3CAA5;
`
const ArticleItem = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  width: 200px;
  margin: 15px 0px 15px 0px;
`

const ArticleInfo = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ItemName = styled.div`
`

const ItemPrice = styled.div``

const AddToCartButton = styled.div`
  position: absolute;
  margin-left: 92%;
  margin-bottom: 215%;
  border-radius: 60px;

  button{
    height: 35px;
    width: 35px;
    border-radius: 60px;
    border: none;
    background-color: #f5f5f5;
    border: 1px solid #d7b069;
    box-shadow: 1px 0.5px 3px 1px #d7b069;
  }
  button:hover{
    transform: scale(1.1);
  }
  button:active{
    transform: scale(1)
  }
`

export { Items }