import React, { useContext } from "react"
import styled from "styled-components"
import { backOrNextItems, toTop } from "./Functions/backOrNextItems"
import { AppContext } from "../../Context/AppContext"

const MoreItemsButton = ({ backNextToTop }) =>{

  const {
    totalHomeArticles,
    totalWinterArticles,
    showArticles,
    setShowArticles,
    articlesLimitCount,
    setArticlesLimitCount,
    articlesCount,
    setArticlesCount,
    articleChoice,
    pageCount,
    setPageCount
  } = useContext(AppContext)

  let maxHomeOrWinter = articleChoice === 'niños' ? totalWinterArticles : totalHomeArticles

  return(
    <ButtonsContainer>
      {articlesCount !== 15
        ? <a onClick={() => (toTop(backNextToTop), backOrNextItems({
          backOrNextChoice: "back",
          setShowArticles,
          articlesLimitCount,
          setArticlesLimitCount,
          totalHomeArticles,
          totalWinterArticles,
          articlesCount,
          setArticlesCount,
          setPageCount,
          articleChoice}))}>
            <BorderContainer>
                <PreviousNextButton>Anterior</PreviousNextButton>
            </BorderContainer>
          </a>
        : <span>
            <BorderContainer>
              <PreviousNextButton  disabled>Anterior</PreviousNextButton>
            </BorderContainer>
          </span>
      }
      <NumberPageCount>
        <BorderContainerNumber>{pageCount}</BorderContainerNumber>
      </NumberPageCount>
      {articlesCount < maxHomeOrWinter.length && showArticles.length === 15
        ? <a onClick={() => (toTop(backNextToTop),backOrNextItems({
          backOrNextChoice: "next",
          setShowArticles,
          articlesLimitCount,
          setArticlesLimitCount,
          totalHomeArticles,
          totalWinterArticles,
          articlesCount,
          setArticlesCount,
          setPageCount,
          articleChoice}))}>
            <BorderContainer>
                <PreviousNextButton>Siguiente</PreviousNextButton>
              </BorderContainer>
            </a>
        : <span>
            <BorderContainer>
              <PreviousNextButton disabled>Siguiente</PreviousNextButton>
            </BorderContainer>
          </span>
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
    box-shadow: 0px 0px 5px 5px #AC8DAF;
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
    box-shadow: 0px 0px 5px 5px #AC8DAF;
    /* :disabled{
      transform: scale(1);
      box-shadow: 0px 0px 5px 5px #AC8DAF;
    } */
  }

  @media only screen and (max-width: 991px) {
    margin-top: 10%;
  }
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
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

const NumberPageCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 50px;
  width: 45px;
  text-align: center;
  background-color: white;
  border-radius: 60px;
  box-shadow: 0px 0px 5px 5px #AC8DAF;
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
  border: 2px solid #AC8DAF;
  border-radius: 50px;
`


export { MoreItemsButton }