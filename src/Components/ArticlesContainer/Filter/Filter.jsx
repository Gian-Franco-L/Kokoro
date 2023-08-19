import React, { useContext } from "react"
import styled from "styled-components"
import filterFuncion from "./Functions/filterFuncion"
import { AppContext } from "../../../Context/AppContext"

const Filter = () => {
  const {
    articleChoice,
    setArticleChoice,
    setArticlesCount,
    setPageCount,
  } = useContext(AppContext)

  return(
    <FilterItems>
      <BorderContainer>
        <DiscountTittle>Categorias</DiscountTittle>
        <Buttons articleChoice={articleChoice}>
          <button id="HogarWord" onClick={() =>filterFuncion(setArticleChoice, setArticlesCount, setPageCount, "hogar")}>
            Hogar
          </button>
          <button id="NiñosWord" onClick={() =>filterFuncion(setArticleChoice, setArticlesCount, setPageCount, "niños")}>
            Niños
          </button>
        </Buttons>
      </BorderContainer>
    </FilterItems>
  )
}


const FilterItems = styled.div`
  position: absolute;
  top: 2%;
  left: 3%;
  height: 120px;
  width: 22%;
  padding: 3px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 5px #AC8DAF;
  border-radius: 20px;
`

const BorderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
`

const DiscountTittle = styled.h4`
  position: relative;
  height: 30px;
  width: 100%;
  text-align: center;
  padding-top: 1%;
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  font-size: clamp(1rem, 5vw, 1.7rem);
  border-radius: 20px;

  
  button{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 50%;
    border: none;
    background-color: transparent;
  }

  #HogarWord{
    color: ${props => props.articleChoice === "hogar" ? "#70416D" : "#212529"};
    border-top: 2px solid #AC8DAF;
    border-right: 2px solid #AC8DAF;
  }
  #NiñosWord{
    color: ${props => props.articleChoice === "niños" ? "#70416D" : "#212529"};
    border-top: 2px solid #AC8DAF;
  }
`

export { Filter }