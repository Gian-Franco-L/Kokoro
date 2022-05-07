import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import styled from "styled-components"

const ItemOnCart = ({ item }) =>{
  const {
    articlesCart,
    setArticlesCart,
  } = useContext(AppContext)

  function outOfCart(payload){
    let outArticle
    if(articlesCart.filter(item => item.name === payload)[0].amount === 1){
      outArticle = articlesCart.filter(item => item.name !== payload)
      setArticlesCart(outArticle)
    }
    else{
      let articleIndex
      let articleAmount = articlesCart
      for(let i=0; i<articlesCart.length; i++){
        if(articlesCart[i].name === payload){
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
      <Kick>
        {item.name.length>0 ? <button onClick={() => outOfCart(item.name)}></button> : null}
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