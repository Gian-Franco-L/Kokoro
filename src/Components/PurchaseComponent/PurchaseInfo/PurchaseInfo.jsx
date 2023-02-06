import React from "react"
import styled from "styled-components"

const PurchaseInfo = ({ purchase }) =>{
  return(
    <PurchaseInfoContainer>
      <Img img={purchase.img}/>
      <Info>
        <Name>{purchase.name}</Name>
        <Amount>Cantidad: {purchase.amount}</Amount>
        <Price>Precio: Ar${purchase.price}</Price>
      </Info>
    </PurchaseInfoContainer>
  )
}

const PurchaseInfoContainer = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 400px;
  font-size: 1.2rem;
`

const Img = styled.div`
  border-radius: 20px;
  height: 170px;
  min-width: 130px;
  margin-left: 4%;
  margin-right: 7%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Info = styled.div`
  padding-top: 3%;
`

const Name = styled.div`
  height: 40%;
`
const Amount = styled.div`
  height: 25%;
`
const Price = styled.div`
  height: 25%;
`

export { PurchaseInfo }