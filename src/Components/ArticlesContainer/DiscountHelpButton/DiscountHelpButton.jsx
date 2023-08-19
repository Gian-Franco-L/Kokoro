import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../../../Context/AppContext"
import {BsInfoSquare} from "react-icons/bs"

const DiscountHelpButton = () =>{
  const {
    setOnOffDiscountModal
  } = useContext(AppContext)
  
  return(
    <MainContainer onClick={() => setOnOffDiscountModal("on")}>
      <EmptyIcon />
      <p>Descuento</p>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 50px;
  top: 0vh;
  right: 2%;
  color: #AC8DAF;
  font-size: clamp(1rem, 5vw, 2rem);
  cursor: pointer;
`

const EmptyIcon = styled(BsInfoSquare)`
  color: #AC8DAF;
  margin-bottom: 16px;
  margin-right: 5px;
`

export { DiscountHelpButton }