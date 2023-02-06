import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

const UserPurchases = ({ purchase }) =>{
  return(
    <PurchaseContainer>
      {purchase.info.map(item =>(
        <Item key={uuidv4()}>
          <h5>{item.name}</h5>
          <h5>Cantidad: {item.amount}</h5>
          <h5>Precio: {item.price}</h5>
        </Item>
      ))}
      <Total>Total: {purchase.total}</Total>
    </PurchaseContainer>
  )
}

const PurchaseContainer = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 1%;
  padding-left: 2%;
`

const Item = styled.div`
  width: 200px;
  margin-left: 8%;
  margin-bottom: 1%;
  margin-top: 1%;
`

const Total = styled.h1`
  position: absolute;
  right: 3%;
`

export { UserPurchases }