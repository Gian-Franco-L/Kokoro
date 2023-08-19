import React from "react"
import styled from "styled-components"

const AllPurchases = ({ user }) =>{
  return(
    <PurchaseInfoContainer>
      <User>
        <Name><h1>{user.name}</h1></Name>
        <Phone><h1>Telefono: {user.phone}</h1></Phone>
      </User>
    </PurchaseInfoContainer>
  )
}

const PurchaseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  padding-bottom: 1%;
  margin-bottom: 1%;
  font-size: 1.2rem;
  border-top: 5px solid black;
`

const User = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`

const Phone = styled.div`
  width: 50%;
  padding-left: 5%;
`

const Name = styled.div`
 width: 50%;
`

export { AllPurchases }