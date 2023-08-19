import React, { useState, useRef } from "react"
import { PurchaseInfo } from "./PurchaseInfo/PurchaseInfo"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { deleteChoice } from "./Functions/PurchaseProfileFunctions"
import purchaseService from "../../Services/purchase"
import {IoMdTime} from "react-icons/io"

const PurchaseProfile = ({ purchases, token }) =>{

  const deleteChoiceButtonRef = useRef(null)
  const [clockState, setClockState] = useState(purchases.status)

  return(
    <MainContainer>
      <PurchaseContainer>
        <BorderContainer>
          <InfoContainer>
            {
              purchases.info && purchases.info.map(purchase =>(
                <PurchaseInfo
                  purchase={purchase}
                  key={uuidv4()}
                />
              ))
            }
          </InfoContainer>
          <Total>
            <div>Total: {purchases.total}</div>
            <ButtonContainer onClick={() => (deleteChoice(purchases, purchaseService, token, deleteChoiceButtonRef), setClockState(prev => prev === "off" ? "on" : "off"))}>
              <BorderContainerRegisterButton>
                {clockState === "off" 
                  &&  <Clock />
                }
                <AddToCartButton ref={deleteChoiceButtonRef}>
                  {purchases.status === "on" ? "Eliminar" : "Cancelar"}
                </AddToCartButton>
              </BorderContainerRegisterButton>
            </ButtonContainer>
          </Total>
        </BorderContainer>
      </PurchaseContainer>
    </MainContainer>
  )
}

const Clock = styled(IoMdTime)`
  position: absolute;
  height: 23px;
  width: 23px;
  right: -40%;
  color: #70416D;
`

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
  border: 2px solid #AC8DAF;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    display: inline-block;
  }
`

const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  font-size: clamp(.5rem, 5.5vw, 1.4rem);
  border-left: 2px solid #AC8DAF;

  @media only screen and (max-width: 820px){
    position: relative;
    flex-direction: row;
    height: 50px;
    width: 100%;
    border-left: none;
    border-top: 2px solid #AC8DAF;
  }
`
const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  padding: 3px;
  background-color: #f5f5f5;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 5px #AC8DAF;
  font-size: 1.1rem;
  cursor: pointer;
  
  @media only screen and (max-width: 300px){
    height: 30px;
    width: 80px;
  }
  @media only screen and (max-width: 991px) {
    height: 35px;
    width: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const BorderContainerRegisterButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
`

const AddToCartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: clamp(.5rem, 5.5vw, 1.1rem);
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
export { PurchaseProfile }