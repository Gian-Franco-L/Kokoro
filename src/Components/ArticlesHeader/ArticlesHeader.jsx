import React from "react"
import styled from "styled-components"
import { BackButton } from "./BackButton/BackButton"
import { Filter } from "./Filter/Filter"
import { Search } from "./Search/Search";

const ArticlesHeader = ({ articulos, tipes }) =>{
  return(
    <ArticleHeader>
      <BackButton articulos={articulos} tipes={tipes} />
      <Search />
      <Filter />
    </ArticleHeader>
  )
}

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 87vh;
  min-width: 20%;
  top: 10%;
  left: 0;
  margin: 30px 0px 0px 20px;
`

export { ArticlesHeader }