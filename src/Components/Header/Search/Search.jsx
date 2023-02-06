import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import searchFunction from "./searchFunction"
import { BsSearch } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"

const Search = ({ searchRef }) => {

  const {
    totalArticles,
    searchedArticles,
    setSearchedArticles
  } = useContext(AppContext)

  function clearSearch(){
    searchRef.current.value = ""
    setSearchedArticles(null)
  }

  return(
    <SearchInput>
      <input ref={searchRef} onChange={(event) => searchFunction(event, totalArticles, searchedArticles, setSearchedArticles)} placeholder="Que estas buscando?"/>
      {
        searchedArticles
          ? <CrossIcon onClick={clearSearch}><AiIconClose /></CrossIcon>
          : <SearchIcon><BsIconSearch /></SearchIcon>
      }
    </SearchInput>
  )
}

const SearchInput = styled.div`
  position: absolute;
  top: 25%;
  left: 32%;
  display: flex;
  height: 45px;
  width: 24.5%;

  input{
    outline: none;
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 60px;
    border: 2px solid #646464;
    background-color: #f5f5f5;
    /* :hover~div{
        color: #ab6f4a;
        border-left-color: #ab6f4a;
        transition: 0.3s;
    } */
  }
  
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 2%;
    width: 96%;
    top: 0%;
    left: 0%;
    margin-top: 20px;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  right: 2%;
  height: 40px;
  width: 35px;
  border-left: 1px solid black;
`

const BsIconSearch = styled(BsSearch)`
  height: 30px;
  width: 30px;
  padding-left: 5px;
`

const AiIconClose = styled(AiOutlineClose)`
  height: 30px;
  width: 30px;
  padding-left: 5px;
`

const CrossIcon = styled.div`
  position: absolute;
  right: 2%;
  height: 40px;
  width: 35px;
  border-left: 1px solid black;
  cursor: pointer;
`

export { Search }