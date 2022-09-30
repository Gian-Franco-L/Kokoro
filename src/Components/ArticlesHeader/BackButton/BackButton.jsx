import React, { useContext } from "react"
import styled from "styled-components"
import enabledItems from "./enableItems"
import { AppContext } from "../../../Context/AppContext"

const BackButton = ({ articulos, tipes }) =>{
  const {
    totalArticles,
    setShowArticles,
    setArticlesCount
  } = useContext(AppContext)

  return(
    <Button onClick={() => enabledItems(setShowArticles, setArticlesCount, articulos, tipes, totalArticles)}><button>Back</button></Button>
  )
}

const Button = styled.div`
  position: relative;
  left: 5%;
  button{
    height: 80px;
    width: 230px;
  }
`

export { BackButton }