import React from "react"
import styled from "styled-components"

const Skeletons = () =>{
  return(
    <MainContainer>
      <PurchaseContainer>
        <BorderContainer>
          <div />
        </BorderContainer>
      </PurchaseContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
  border-radius: 20px;
`

const PurchaseContainer = styled.div`
  height: 100%;
  padding: 1.5px;
`

const BorderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    height: 200px;
  }
`

export { Skeletons }