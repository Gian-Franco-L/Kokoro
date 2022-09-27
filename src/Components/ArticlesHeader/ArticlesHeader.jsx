import React from "react"
import styled from "styled-components"
import { BackButton } from "./BackButton/BackButton"
import { Filter } from "./Filter/Filter"
import { Search } from "./Search/Search";

const ArticlesHeader = ({ articulos, tipes, totalArticles, setTotalArticles }) =>{
  return(
    <ArticleHeader>
      <BackButton
        articulos={articulos}
        tipes={tipes}
      />
      <Search />
      <Filter 
        totalArticles={totalArticles}
        setTotalArticles={setTotalArticles}
      />
    </ArticleHeader>
  )
}

const ArticleHeader = styled.div`
  position: sticky;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 87vh;
  min-width: 20%;
  top: 10%;
  left: 0;
  margin: 30px 0px 20px 20px;
`

export { ArticlesHeader }