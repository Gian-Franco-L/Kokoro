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
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    display: inline-block;
  }
`

const Total = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 5px);
  width: 20%;
  right: 0;
  font-size: clamp(.5rem, 10vw, 1.3rem);
  border-left: 2px solid #CEAB93;
  @media only screen and (max-width: 820px){
    position: relative;
    width: 100%;
    border-left: none;
    border-top: 2px solid #CEAB93;
    height: 50px;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
`
export { PurchaseComponent }