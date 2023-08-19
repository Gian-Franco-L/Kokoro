import React, { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import { AllPurchases } from "./AllPurchases/AllPurchases"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { UserPurchases } from "./AllPurchases/UserPurchases"
import { switchButton } from "./Functions/ListOfPurchasesFunctions"
import { Link } from "wouter"
import { Skeletons } from "../ArticlesContainer/Skeletons/Skeletons"
import { ListOfPurchasesItems } from './ListOfPurchasesItems/ListOfPurchasesItems'
import { useGetAllWinterArticles } from "../../Hooks/useGetAllWinterArticles"

const ListOfPurchases = () =>{

  const {
    userName,
    token,
    purchaseItems,
    productSwitch,
    setProductSwitch,
    totalWinterArticles
  } = useContext(AppContext)

  useGetAllWinterArticles()

  return(
    <MainContainer>
      <Link href="/"><Button>Volver</Button></Link>
      <SwitchButton onClick={() => switchButton(setProductSwitch)}>-&#62;</SwitchButton>
      {
        productSwitch === "on"
          ? <ItemsContainer>
              {
                totalWinterArticles.length !== 0
                  ? totalWinterArticles.map(item =>(
                      <ListOfPurchasesItems
                        userName={userName}
                        id={item.id}
                        name={item.Name}
                        price={item.Price}
                        date={item.Date}
                        size={item.Size}
                        material={item.Material}
                        stuffing={item.Stuffing}
                        itemType={item.Type}
                        status={item.Status}
                        img={item.Img}
                        key={uuidv4()}
                      />
                    ))
                  : <Skeletons />
              }
          </ItemsContainer>
        : <PurchaseContainer>
            {
              purchaseItems !== 0
                && purchaseItems.map(user =>(
                    <div key={uuidv4()}>
                      <AllPurchases
                        user={user}
                      />
                      {user.purchase && user.purchase.length !== 0 && user.purchase.map(purchase =>(
                        <UserPurchases
                          user={user}
                          purchase={purchase}
                          token={token}
                          key={uuidv4()}
                        />
                      ))}
                    </div>
                   ))
            }
          </PurchaseContainer>
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 135px;
  margin-top: 1%;
  margin-left: 7.1%;
  margin-bottom: 1%;
  font-size: clamp(1rem, 3vw, 1.6rem);
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
    margin-top: 7px;
    height: 45px;
    width: 120px;
    margin-left: 20px;
    margin-right: 5px;
  }
`

const SwitchButton = styled.button`
  position: absolute;
  height: 50px;
  width: 135px;
  right: 7.1%;
  margin-top: 1%;
  font-size: clamp(1rem, 3vw, 1.6rem);
  border-radius: 30px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-color: white;
  text-align: center;
  cursor: pointer;
  border: none;
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

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 8%;
  margin-right: 7%;
  @media only screen and (max-width: 584px){
    margin-left: 1%;
    margin-right: 1%;
  }
`

export { ListOfPurchases }