import React from "react"
import styled from "styled-components"
import { Items } from "./Items/Items"

const ArticlesContainer = ({ showArticles }) =>{
  return(
    <ArticleContainer>
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

const ArticleContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 70vw;
  margin-top: 3%;
  margin-left: 3%;
  justify-content: space-around;
  flex-wrap: wrap;
`


export { ArticlesContainer }