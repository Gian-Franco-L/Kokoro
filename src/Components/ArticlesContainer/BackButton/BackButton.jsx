import React, { useContext } from "react"
import styled from "styled-components"
import enabledItems from "./enableItems"
import { AppContext } from "../../../Context/AppContext"
import {BiArrowToLeft} from "react-icons/bi"
import "../../../CSS/Animation.css"


const BackButton = ({ articulos, tipes }) =>{
  const {
    totalArticles,
    setShowArticles,
    setArticlesCount,
    setPageCount
  } = useContext(AppContext)

  return(
    <Button onClick={() => enabledItems(
      setShowArticles,
      articulos,
      tipes,
      totalArticles,
      setArticlesCount,
      setPageCount)}><button><BiArrowToLeft />Volver</button></Button>
  )
}

const Button = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  top: -19.5%;
  left: 14%;
  button{
    font-size: 1.3rem;
    height: 50px;
    width: 100px;
    border: none;
    background-color: #f5f5f5;
  }
  button:hover{
    transform: scale(1.1)
  }
`

export { BackButton }