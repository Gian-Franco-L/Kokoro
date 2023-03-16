import React from "react"
import styled from "styled-components"
import { Items } from "./Items/Items"
import { BackButton } from "./BackButton/BackButton"
import { Filter } from "./Filter/Filter"
import { v4 as uuidv4 } from "uuid"
import { Skeletons } from "./Skeletons/Skeletons"


const ArticlesContainer = ({ showArticles, articleChoice, articulos, tipes }) =>{
  return(
    <ArticleContainer>
      <Tittle id="top">Articulos</Tittle>
      {/* <Tittle id="top">Categoria: {articleChoice}</Tittle> */}
      {/* <BackButton articulos={articulos} tipes={tipes} /> */}
      <div>
        {/* <Filter /> */}
        <ItemsContainer>
          {showArticles.length !== 0 ? showArticles.map(item =>(
            <Items 
              items={item.Name}
              itemsPrice={item.Price}
              size={item.Size}
              material={item.Material}
              stuffing={item.Stuffing}
              choice={item.Choice}
              img={item.Img}
              key={uuidv4()}
            />
          ))
          : <Skeletons />}
        </ItemsContainer>
      </div>
    </ArticleContainer>
  )
}

const ArticleContainer = styled.div`
  position: relative;
`

const Tittle = styled.div`
  position: relative;
  font-family: 'Festive', cursive;
  margin-bottom: 7%;
  margin-top: 7%;
  left: 35.2%;
  display: flex;
  height: 10vh;
  width: 30vw;
  font-size: clamp(5rem, 15vw, 13rem);
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid black;
  padding-bottom: 5%;
  color: black;
  @media only screen and (max-width: 584px){
    width: 50vw;
    left: 24%;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 8%;
  margin-right: 7%;
  @media only screen and (max-width: 584px){
    margin-left: 1%;
    margin-right: 1%;
  }
`

export { ArticlesContainer }