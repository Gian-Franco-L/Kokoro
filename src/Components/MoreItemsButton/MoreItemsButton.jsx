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
      {articlesCount !== 15
        ? <a href="#top"><BorderContainer><PreviousNextButton  onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}>Anterior</PreviousNextButton></BorderContainer></a>
        : <span><BorderContainer><PreviousNextButton  disabled>Anterior</PreviousNextButton></BorderContainer></span>
      }
      <Number><BorderContainerNumber>{pageCount}</BorderContainerNumber></Number>
      {articlesCount < totalArticles.length && showArticles.length === 15
        ? <a href="#top"><BorderContainer><PreviousNextButton onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}>Siguiente</PreviousNextButton></BorderContainer></a>
        : <span><BorderContainer><PreviousNextButton disabled>Siguiente</PreviousNextButton></BorderContainer></span>
      }
    </ButtonsContainer>
  )
}

const ButtonsContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    text-decoration: none;
    :hover{
      transform: scale(1.05);
    }
  }
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    :disabled{
      transform: scale(1);
      box-shadow: 1px 1px 4px 1px rgb(171, 171, 171);
    }
  }
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
`

const PreviousNextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 90px;
  background-color: white;
  border-radius: 60px;
  border: none;
`

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 50px;
  width: 45px;
  text-align: center;
  background-color: white;
  border-radius: 60px;
  box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 300px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const BorderContainerNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  border: 2px solid #CEAB93;
  border-radius: 50px;
`


export { MoreItemsButton }