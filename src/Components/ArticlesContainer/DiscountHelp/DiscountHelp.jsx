import React from "react"
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

const DiscountHelp = () =>{
  return(
    <MainContainer>
      <BorderContainer>
        <DiscountTittle>Descuento</DiscountTittle>
        <DiscountExplication>Gana <Star /> comprando artículos para niños para obtener un descuento de $1200 en tu compra. El descuento será visible en el carrito de compras.</DiscountExplication>
      </BorderContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 3%;
  height: 160px;
  width: 22%;
  padding: 3px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 5px #AC8DAF;
  border-radius: 20px;
`

const BorderContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
`

const DiscountTittle = styled.h4`
  height: 30px;
  text-align: center;
  border-bottom: 2px solid #AC8DAF;
`

const DiscountExplication = styled.h5`
  text-align: center;
  font-size: clamp(.9rem, 1.3vw, 1.2rem);
`

const Star = styled(AiFillStar)`
  height: 23px;
  width: 23px;
  color: #AC8DAF;
`

export { DiscountHelp }