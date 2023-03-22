import React from "react"
import { PurchaseInfo } from "./PurchaseInfo/PurchaseInfo"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

const PurchaseComponent = ({ purchases }) =>{
  return(
    <MainContainer>
      <PurchaseContainer>
        <BorderContainer>
          <InfoContainer>
            {purchases.info.map(purchase =>(
              <PurchaseInfo
                purchase={purchase}
                key={uuidv4()}
              />
            ))}
          </InfoContainer>
          <Total>
            Total: {purchases.total}
          </Total>
        </BorderContainer>
      </PurchaseContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
`
const PurchaseContainer = styled.div`
  padding: 1.5px;
`
const BorderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    display: inline-block;
  }
`

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  font-size: clamp(.5rem, 10vw, 1.4rem);
  border-left: 2px solid #CEAB93;

  @media only screen and (max-width: 820px){
    position: relative;
    height: 50px;
    width: 100%;
    border-left: none;
    border-top: 2px solid #CEAB93;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  width: 80%;
  @media only screen and (max-width: 820px){
    width: 100%;
  }
`
export { PurchaseComponent }