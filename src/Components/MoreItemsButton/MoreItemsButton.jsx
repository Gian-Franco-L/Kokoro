import React from "react"
import styled from "styled-components"
import nextItemsButton from "./nextItemsButton"
import previousItemsButton from "./previousItemsButton"

const MoreItemsButton = ({
  showArticles,
  setShowArticles,
  articlesLimitCount,
  setArticlesLimitCount,
  articlesCount,
  setArticlesCount,
  totalArticles
}) =>{

  return(
    <ButtonsContainer>
      {articlesCount !== 9
        ? <PreviousButton  onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount,
          totalArticles, articlesCount, setArticlesCount)}/>
        : <PreviousButton  disabled onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount,
          totalArticles, articlesCount, setArticlesCount)}/>
      }
      {articlesCount < totalArticles.length
        ? <NextButton onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount)}/>
        : <NextButton disabled onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount)}/>
      }
    </ButtonsContainer>
    
  )
}

const ButtonsContainer= styled.div`
  position: absolute;
  height: 50px;
  width: 200px;
  left: 55.8%;
`
const PreviousButton = styled.button`
  height: 50px;
  width: 100px;
`
const NextButton = styled.button`
  height: 50px;
  width: 100px;
`

export { MoreItemsButton }