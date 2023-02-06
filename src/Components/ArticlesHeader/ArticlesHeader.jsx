import React from "react"
import styled from "styled-components"
import { Filter } from "../ArticlesContainer/Filter/Filter"
// import { Search } from "./Search/Search";

const ArticlesHeader = () =>{
  return(
    <ArticleHeader>
      <Filter />
    </ArticleHeader>
  )
}

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  min-width: 20%;
`

export { ArticlesHeader }