import React from "react"
import { AllPurchases } from "./AllPurchases/AllPurchases"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import {UserPurchases} from "./AllPurchases/UserPurchases"
import { Link } from "wouter"

const ListOfPurchases = ({ purchaseItems }) =>{

  return(
    <MainContainer>
      <Link href="/"><Button>Volver</Button></Link>
      <PurchaseContainer>
        {purchaseItems !== 0 && purchaseItems.map(user =>(
          <div key={uuidv4()}>
            <AllPurchases
              user={user}
            />
            {user.purchase.length !== 0 && user.purchase.map(purchase =>(
              <UserPurchases
                purchase={purchase}
                key={uuidv4()}
              />
            ))}
        </div>
        ))}
      </PurchaseContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ebe9eb;
  border-radius: 20px;
`
const PurchaseContainer = styled.div`
  width: 99.8%;
  margin: 0.1%;
  border-radius: 20px;
  @media only screen and (max-width: 820px){
    min-width: 200px;
  }
`

const Button = styled.div`
  z-index: 1;
  height: 50px;
  width: 135px;
  margin-top: 1%;
  margin-left: 7.1%;
  margin-bottom: 1%;
  padding-top: 7px;
  font-size: 1.6rem;
  border-radius: 30px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-color: white;
  text-align: center;
  cursor: pointer;
  a{
    color: black;
  }
  :hover{
    transform: scale(1.05)
  }
  @media only screen and (max-width: 820px){
    padding-top: 5px;
    margin-top: 7px;
    height: 45px;
    width: 120px;
    margin-left: 20px;
    margin-right: 5px;
  }
`

export { ListOfPurchases }