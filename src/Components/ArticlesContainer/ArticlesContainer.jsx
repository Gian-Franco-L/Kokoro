import React from "react"
import styled from "styled-components"
import { Items } from "./Items/Items"
import { BackButton } from "./BackButton/BackButton"


const ArticlesContainer = ({ showArticles, articleChoice, articulos, tipes }) =>{
  return(
    <ArticleContainer>
      <Tittle>Categoria: {articleChoice}</Tittle>
      <BackButton articulos={articulos} tipes={tipes} />
      {showArticles.map(item =>(
        <Items 
          items={item.Name}
          itemsPrice={item.Price}
          key={item.Price}
        />
      ))}
    </ArticleContainer>
  )
}

const Tittle = styled.div`
  position: absolute;
  top: -22.5%;
  left: 10.8%;
  display: flex;
  height: 10vh;
  width: 40vw;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px -5px #d7b069;
  border: 2px solid #E3CAA5;
`

const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  height: 80%;
  width: 70vw;
  margin-left: 3%;
  justify-content: space-around;
  flex-wrap: wrap;
`


export { ArticlesContainer }