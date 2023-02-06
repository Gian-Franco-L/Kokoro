import React from "react"
import { PurchaseInfo } from "./PurchaseInfo/PurchaseInfo"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

const PurchaseComponent = ({ purchases }) =>{
  return(
    <MainContainer>
      <PurchaseContainer>
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
      </PurchaseContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
`
const PurchaseContainer = styled.div`
  width: 99.8%;
  border: 2px solid #CEAB93;
  margin: 0.1%;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    min-width: 200px;
  }
`
const Total = styled.div`
  position: absolute;
  text-align: center;
  width: 20%;
  top: 50%;
  right: 0;
  font-size: 1.2rem;
  margin-top: -1%;
`
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  border-right: 2px solid #CEAB93;
`
export { PurchaseComponent }