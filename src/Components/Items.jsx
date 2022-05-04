import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import styled from "styled-components"


const Items = ({ items, itemsPrice }) =>{
  const {
    ArticlesCart,
    setArticlesCart
  } = useContext(AppContext)

  function addToCart(payload){
    if(ArticlesCart.filter(item => item.name === payload).length === 0){
      setArticlesCart([...ArticlesCart, {name: payload, amount: 1}])
    }
    else{
      let articleIndex
      let articleAmount = ArticlesCart
      for(let i=0; i<ArticlesCart.length; i++){
        if(ArticlesCart[i].name === payload){
          articleIndex = i
        }
      }
      articleAmount[articleIndex].amount++
      let reRender
      reRender = [...articleAmount, {name: "", amount: ""}]
      setArticlesCart(reRender)
      setTimeout(() =>{
      setArticlesCart(articleAmount)
      }, 0)
    }
  }
  
  return(
    <MainContainer>
      <ArticleItem />
      <ArticleInfo>
        <ItemName><div>{items}</div></ItemName>
        {itemsPrice}
        <AddToCartButton><button onClick={() => addToCart(items)}></button></AddToCartButton>
      </ArticleInfo>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ArticleItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 300px;
  margin: -10px 20px 20px 20px;
`

const ArticleInfo = styled.div`
  position: relative;
  width: 300px;
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