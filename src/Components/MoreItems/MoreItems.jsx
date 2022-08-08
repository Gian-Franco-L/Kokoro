import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../Context/AppContext"
import moreItems from "./moreItems"

const MoreItems = ({ filterItems }) =>{
  const {
    showArticles,
    setShowArticles,
    articlesCount,
    setArticlesCount,
    totalArticles,
  } = useContext(AppContext)

  return(
    <ItemsButton onClick={() => moreItems(showArticles, setShowArticles, totalArticles, articlesCount, setArticlesCount, filterItems)}/>
  )
}

const ItemsButton = styled.button`
  position: relative;
  height: 50px;
  width: 100px;
  left: calc(50% - 50px);
  margin-bottom: 50px;
`

export default MoreItems