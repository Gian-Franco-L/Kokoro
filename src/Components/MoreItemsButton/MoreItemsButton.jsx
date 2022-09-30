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
  totalArticles,
  pageCount,
  setPageCount
}) =>{

  return(
    <ButtonsContainer>
      {articlesCount !== 12
        ? <PreviousButton  onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}/>
        : <PreviousButton  disabled />
      }
      <Number>{pageCount}</Number>
      {articlesCount < totalArticles.length && showArticles.length === 12
        ? <NextButton onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}/>
        : <NextButton disabled />
      }
    </ButtonsContainer>
    
  )
}

const ButtonsContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 80vw;
  margin-left: 18.6%;
`
const PreviousButton = styled.button`
  height: 50px;
  width: 100px;
`
const NextButton = styled.button`
  height: 50px;
  width: 100px;
`
const Number = styled.div`
  height: 50px;
  width: 10px;
  padding-top: 1.8%;
`

export { MoreItemsButton }