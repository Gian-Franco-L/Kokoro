import React from "react"
import styled from "styled-components"
import { Items } from "./Items/Items"

const ArticlesContainer = ({ showArticles }) =>{
  return(
    <ArticleContainer>
      <Main>
        {showArticles.map(item =>(
          <Items 
            items={item.Name}
            itemsPrice={item.Price}
            key={item.Price}
          />
        ))}
      </Main>
    </ArticleContainer>
  )
}

const ArticleContainer = styled.div`
  display: flex;
  margin-top: 40px;
`

const Main = styled.div`
  display: flex;
  width: 74vw;
  min-height: 100%;
  justify-content: center;
  flex-wrap: wrap;
`

export { ArticlesContainer }