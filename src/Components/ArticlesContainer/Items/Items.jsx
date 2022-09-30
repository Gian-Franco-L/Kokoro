import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import addToCart from "./addToCart"

const Items = ({ items, itemsPrice }) =>{
  const {
    articlesCart,
    setArticlesCart,
    setOpenModal,
    setModalArticle
  } = useContext(AppContext)

  function changeModalState(){
    setOpenModal(true)
    setModalArticle({'item': items, 'itemsPrice': itemsPrice})
  }

  return(
    <MainContainer>
      <ArticleItem onClick={changeModalState}/>
      <ArticleInfo>
        <ItemName><div>{items}</div></ItemName>
        {itemsPrice}
        <AddToCartButton><button onClick={() => addToCart(items, itemsPrice, articlesCart, setArticlesCart)}></button></AddToCartButton>
      </ArticleInfo>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  height: 250px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 7%;
`
const ArticleItem = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  width: 200px;
  margin: 0px 20px 20px 20px;
`

const ArticleInfo = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15%;
`

const ItemName = styled.div`

`

const AddToCartButton = styled.div`
  button{
    height: 30px;
    width: 70px;
  }
`

export { Items }