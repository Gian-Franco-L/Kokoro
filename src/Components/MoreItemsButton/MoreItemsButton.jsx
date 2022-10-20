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
        ? <PreviousButton  onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}> Anterior</PreviousButton>
        : <PreviousButton  disabled>Anterior</PreviousButton>
      }
      <Number>{pageCount}</Number>
      {articlesCount < totalArticles.length && showArticles.length === 12
        ? <NextButton onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}>Siguiente</NextButton>
        : <NextButton disabled >Siguiente</NextButton>
      }
    </ButtonsContainer>
    
  )
}

const ButtonsContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8%;  
  margin-left: 10.7%;
`
const PreviousButton = styled.button`
  height: 50px;
  width: 100px;
  margin-right: 2%;
  border: none;
  background-color: white;
  border-radius: 60px;
  border: 2px solid #E3CAA5;
  box-shadow: 3px 3px 10px -5px #d7b069;

  :hover{
    transform: scale(1.05);
  }
  :disabled{
    transform: scale(1);
  }
`
const NextButton = styled.button`
  height: 50px;
  width: 100px;
  margin-left: 2%;
  border: none;
  background-color: white;
  border-radius: 60px;
  border: 2px solid #E3CAA5;
  box-shadow: 3px 3px 10px -5px #d7b069;

  :hover{
    transform: scale(1.05);
  }
  :disabled{
    transform: scale(1);
  }
`
const Number = styled.div`
  height: 32px;
  width: 45px;
  padding-top: 13px;
  text-align: center;
  background-color: white;
  border-radius: 60px;
  border: 2px solid #E3CAA5;
  box-shadow: 3px 3px 10px -5px #d7b069;
`

export { MoreItemsButton }