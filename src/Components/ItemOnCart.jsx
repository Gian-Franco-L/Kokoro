import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import styled from "styled-components"

const ItemOnCart = ({ item }) =>{
  const {
    ArticlesCart,
    setArticlesCart
  } = useContext(AppContext)

  function outOfCart(payload){
    let outArticle
    if(ArticlesCart.filter(item => item.name == payload)[0].amount == 1){
      outArticle = ArticlesCart.filter(item => item.name !== payload)
      setArticlesCart(outArticle)
    }
    else{
      let articleIndex
      let articleAmount = ArticlesCart
      for(let i=0; i<ArticlesCart.length; i++){
        if(ArticlesCart[i].name == payload){
          articleIndex = i
        }
      }
      articleAmount[articleIndex].amount--
      let reRender
      reRender = [...articleAmount, {name: "", amount: 0}]
      setArticlesCart(reRender)
      setTimeout(() =>{
      setArticlesCart(articleAmount)
      }, 0)
    }
  }
  return(
    <MainContainer>
      {item.name}
      {item.amount>1 ? item.amount : null}
      {item.name.length>0 ? <button onClick={() => outOfCart(item.name)}></button> : null}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  top: 5%;
  left: 15%;
  margin-top: 10%;
`

export { ItemOnCart }