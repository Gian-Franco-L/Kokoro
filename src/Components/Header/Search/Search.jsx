import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import searchFunction from "./searchFunction"
import { BsSearch } from "react-icons/bs"
import "../../../CSS/Animation.css"

const Search = () => {

  const {
    totalArticles,
    searchedArticles,
    setSearchedArticles
  } = useContext(AppContext)

  return(
    <SearchInput>
      <input onChange={(event) => searchFunction(event, totalArticles, searchedArticles, setSearchedArticles)} placeholder="Que estas buscando?"/>
      <div><BsSearch className="searchIcon"/></div>
    </SearchInput>
  )
}

const SearchInput = styled.div`
  input{
    outline: none;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 60px;
    height: 40px;
    width: 30%;
    margin-top: 1.1%;
    margin-left: 40%;
    border: 2px solid black;
    background-color: #f5f5f5;
  }
  div{
    position: absolute;
    height: 44px;
    width: 35px;
    border-left: 1px solid black;
    top: 24%;
    right: 29.5%;
  }
`

export { Search }