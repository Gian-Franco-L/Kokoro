import React from "react"
import styled from "styled-components"
import disabledItems from "./disabledItems"
import '../../CSS/Animation.css';

const TipeOfArticles = ({ tipes, articulos, articleChoice, setArticleChoice }) =>{
  return(
    <ArticleTipes ref={tipes}>
      <Tittle>Elige una categoria</Tittle>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 1)}>Primero</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 2)}>Segundo</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 3)}>Tercero</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 4)}>Cuarto</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 5)}>Quinto</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 6)}>Sexto</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 7)}>Septimo</Article>
      <Article onClick={() =>disabledItems(tipes, articulos, setArticleChoice, 8)}>Octavo</Article>
    </ArticleTipes>
  )
}

const ArticleTipes = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15%;
`

const Tittle = styled.div`
  position: absolute;
  top: 35.8%;
  display: flex;
  height: 10vh;
  width: 40vw;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px -5px #d7b069;
  border: 2px solid #e3c69a;
`

const Article = styled.div`
  display: flex;
  height: 35vh;
  width: 43vw;
  margin: 27px 25px 0px 25px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.3);
`

export { TipeOfArticles }