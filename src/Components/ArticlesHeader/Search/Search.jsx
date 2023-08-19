import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import searchFunction from "./searchFunction"

const Search = () => {
  const {
    setSearchValue,
    searchValue,
    totalHomeArticles,
    setSearchedArticles
  } = useContext(AppContext)

  return(
    <SearchInput>
      <input onChange={(event) => searchFunction(event, setSearchValue, searchValue, totalHomeArticles, setSearchedArticles)}/>
    </SearchInput>
  )
}

const SearchInput = styled.div`
  input{
    height: 70%;
    width: 80%;
    margin-top: 4%;
    margin-left: 9%;
  }
`

export { Search }