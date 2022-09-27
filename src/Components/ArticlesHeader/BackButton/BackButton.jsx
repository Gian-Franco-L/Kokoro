import React, { useContext } from "react"
import styled from "styled-components"
import enabledItems from "./enableItems"
import { AppContext } from "../../../Context/AppContext"

const BackButton = ({ articulos, tipes }) =>{
  const {
    startingArticles,
    setShowArticles,
    setArticlesCount,
  } = useContext(AppContext)

  return(
    <Button onClick={() => enabledItems(startingArticles, setShowArticles, setArticlesCount, articulos, tipes)}><button>Back</button></Button>
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