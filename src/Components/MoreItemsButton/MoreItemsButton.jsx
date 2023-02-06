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
        ? <a href="#top"><PreviousNextButton  onClick={() => previousItemsButton (setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}><BorderContainer>Anterior</BorderContainer></PreviousNextButton></a>
        : <PreviousNextButton  disabled><BorderContainer>Anterior</BorderContainer></PreviousNextButton>
      }
      <Number><BorderContainerNumber>{pageCount}</BorderContainerNumber></Number>
      {articlesCount < totalArticles.length && showArticles.length === 15
        ? <a href="#top"><PreviousNextButton onClick={() => nextItemsButton(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount)}><BorderContainer>Siguiente</BorderContainer></PreviousNextButton></a>
        : <PreviousNextButton disabled><BorderContainer>Siguiente</BorderContainer></PreviousNextButton>
      }
    </ButtonsContainer>
  )
}

const ButtonsContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

const PreviousNextButton = styled.button`
  height: 50px;
  width: 100px;
  background-color: white;
  border-radius: 60px;
  box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  border: none;

  :hover{
    transform: scale(1.05);
  }
  :disabled{
    transform: scale(1);
    box-shadow: 1px 1px 4px 1px rgb(171, 171, 171);
  }
  :active{
    box-shadow: 1px 1px 5px 3px #e3c69a;
  }
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
  width: 104%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  margin-left: -2%;
  margin-top: 1%;
`

const Number = styled.div`
  height: 50px;
  width: 45px;
  padding-top: 13px;
  text-align: center;
  background-color: white;
  border-radius: 60px;
  box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  margin-left: 20px;
  margin-right: 20px;
`
const BorderContainerNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 39px;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  margin-top: -20%;
  margin-left: 2.5px;
`


export { MoreItemsButton }