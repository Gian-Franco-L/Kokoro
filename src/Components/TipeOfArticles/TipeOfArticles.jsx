import React, { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import styled from "styled-components"
import disabledItems from "./disabledItems"
import '../../CSS/Animation.css';

const TipeOfArticles = ({ children, tipes, articulos }) =>{
  const {
    setArticleChoice
  } = useContext(AppContext)

  return(
    <MainContainer>
    <ArticleTipes ref={tipes}>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,1)}>Primero</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,2)}>Segundo</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,3)}>Tercero</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,4)}>Cuarto</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,5)}>Quinto</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice ,6)}>Sexto</Article>
    </ArticleTipes>
    {children}
    </MainContainer>
  )
}

const MainContainer= styled.div`
  max-width: 100%;
`
const ArticleTipes = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Article = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  margin: 70px 50px 50px 50px;
`

export { TipeOfArticles }