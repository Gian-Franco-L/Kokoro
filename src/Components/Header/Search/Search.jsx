import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import { searchFunction, clearSearch } from "./Functions/SearchFunction"
import { BsSearch } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { useGetAllArticles } from "../../../Hooks/useGetAllArticles"

const Search = () => {

  const {
    searchedArticles,
    setSearchedArticles,
    searchEnableDisable
  } = useContext(AppContext)

  const { allArticles } = useGetAllArticles()

  return(
    <>
      {searchEnableDisable.display === true && searchEnableDisable.disabled
              ? <SearchInput opacity={searchEnableDisable.opacity}>
                  <input disabled onChange={(event) => searchFunction(event, allArticles, setSearchedArticles)} placeholder="Que estás buscando?" id="searchInputRef"/>
                  {
                    searchedArticles
                      ? <CrossIcon onClick={() => clearSearch(setSearchedArticles)}><AiIconClose /></CrossIcon>
                      : <SearchIcon><BsIconSearch /></SearchIcon>
                  }
                </SearchInput>
              : searchEnableDisable.display === true && !searchEnableDisable.disabled
                ? <SearchInput opacity={searchEnableDisable.opacity}>
                    <input onChange={(event) => searchFunction(event, allArticles, setSearchedArticles)} placeholder="Que estás buscando?" id="searchInputRef"/>
                    {
                      searchedArticles
                        ? <CrossIcon onClick={() => clearSearch(setSearchedArticles)}><AiIconClose /></CrossIcon>
                        : <SearchIcon><BsIconSearch /></SearchIcon>
                    }
                  </SearchInput>
                : null
          }
    </>
    
  )
}

const SearchInput = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
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
    border: 2px solid #AC8DAF;
    background-color: #f5f5f5;
    /* :hover~div{
        color: #AC8DAF;
        border-left-color: #AC8DAF;
        transition: 0.3s;
    } */
  }
  @media only screen and (max-width: 1515px) {
    left: 35%;
  }
  @media only screen and (max-width: 1320px) {
    left: 37%;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 0%;
    width: 96%;
    top: 0%;
    left: 0%;
    margin-top: 20px;
  }
  ${props => props.opacity === "1" ? "opacity: 1" : "opacity: 0.5"}
`

const SearchIcon = styled.div`
  position: absolute;
  right: 2%;
  top: 0%;
  height: 40px;
  width: 35px;
  border-left: 1px solid #AC8DAF;
`

const AiIconClose = styled(AiOutlineClose)`
  height: 30px;
  width: 30px;
  padding-left: 5px;
`

const CrossIcon = styled.div`
  position: absolute;
  right: 2%;
  top: 0%;
  height: 40px;
  width: 35px;
  border-left: 1px solid #AC8DAF;
  cursor: pointer;
`

const BsIconSearch = styled(BsSearch)`
  height: 30px;
  width: 30px;
  padding-left: 5px;
`

export { Search }