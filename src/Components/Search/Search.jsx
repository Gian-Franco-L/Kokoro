import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../Context/AppContext"

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
position: absolute;
left: 55%;
width: 200px;
`

export default Search