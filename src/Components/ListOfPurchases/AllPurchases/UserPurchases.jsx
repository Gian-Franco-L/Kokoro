import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import purchaseService from "../../../Services/purchase"
import userService from "../../../Services/user"
import { deletePurchase } from "./Functions/UserPurchasesFunctions"

const UserPurchases = ({ user, purchase, token, }) =>{

  const [deletePurchaseId, setDeletepurchaseId] = useState(false)

  return(
    <PurchaseContainer>
      <Items>
        {purchase.info.map(item =>(
          <Item key={uuidv4()}>
            <h5>{item.cuelloGorroSizeChoice === '?' ? item.name : `${item.name} ${item.cuelloGorroSizeChoice}`}</h5>
            <h5>Cantidad: {item.amount}</h5>
            <h5>Precio: {item.price}</h5>
          </Item>
        ))}
      </Items>
      <Total>
        {
          purchase.status === "off" && 
          <DeletePurchaseButton onClick={() => deletePurchase(setDeletepurchaseId, purchase, user.userName, purchaseService, userService, token)} deletePurchaseId={deletePurchaseId}>X</DeletePurchaseButton>
        }
        Total: {purchase.total}
      </Total>
    </PurchaseContainer>
  )
}

const PurchaseContainer = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 1%;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 200px;
  margin-left: 8%;
  margin-bottom: 1%;
  margin-top: 1%;

  @media only screen and (max-width: 991px){
    margin-bottom: 10%;
  }
`

const Total = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 5%;
`

const DeletePurchaseButton = styled.button`
  height: 35px;
  width: 35px;
  margin-right: 1%;
  border: ${props => props.deletePurchaseId === true ? "2px solid green" : "2px solid red"};
  padding: 0;
  font-size: 1.7rem;

  :hover{
    transform: scale(1.1)
  }
`

export { UserPurchases }