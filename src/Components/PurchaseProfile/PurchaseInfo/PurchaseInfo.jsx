import React from "react"
import styled from "styled-components"

const PurchaseInfo = ({ purchase }) =>{
  return(
    <PurchaseInfoContainer>
      <Img img={purchase.img}/>
      <Info>
        <div>
          {purchase.cuelloGorroSizeChoice === '?' ? purchase.name : `${purchase.name} ${purchase.cuelloGorroSizeChoice}`}
        </div>
        <div>Cantidad: {purchase.amount}</div>
        <div>Precio: Ar${purchase.price}</div>
      </Info>
    </PurchaseInfoContainer>
  )
}

const PurchaseInfoContainer = styled.div`
  display: flex;
  width: 390px;
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: clamp(.5rem, 5vw, 1.3rem);
`

const Img = styled.div`
  border-radius: 20px;
  height: 200px;
  min-width: 150px;
  margin-left: 4%;
  margin-right: 7%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 430px){
    height: 130px;
    min-width: 100px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export { PurchaseInfo }