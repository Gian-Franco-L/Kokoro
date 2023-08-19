import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import {BsFilterSquare} from "react-icons/bs"

const FilterButton = () =>{
  const {
    setOnOffFilterModal
  } = useContext(AppContext)
  
  return(
    <MainContainer onClick={() => setOnOffFilterModal("on")}>
      <FilterIcon />
      <p>Categorias</p>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: absolute;
  width: 40%;
  display: flex;
  align-items: center;
  border-radius: 50px;
  top: 0vh;
  left: 5%;
  color: #AC8DAF;
  font-size: clamp(1rem, 5vw, 2rem);
  cursor: pointer;
  @media only screen and (max-width: 300px){
    right: 0%;
  }
`

const FilterIcon = styled(BsFilterSquare)`
  color: #AC8DAF;
  margin-bottom: 16px;
  margin-right: 5px;
`

export { FilterButton }