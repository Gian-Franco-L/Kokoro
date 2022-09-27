import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"

const Search = () => {
  const {
    setSearchValue
  } = useContext(AppContext)

  function searchFunction (event){
    setSearchValue(event.target.value)
  }

  return(
    <SearchInput>
      <input onChange={searchFunction}/>
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