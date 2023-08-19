import React, { useContext } from "react"
import { buy } from "./Function/ShoppingCart"
import styled, { css } from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ItemOnCart } from "./ItemOnCart/ItemOnCart"
import { totalCount } from "./Function/totalCount"
import { AppContext } from "../../Context/AppContext"
import { useCartFilledOrNot } from "../../Hooks/useCartFilledOrNot"
import { usePayPartDiscountDisableOrFlex } from "../../Hooks/usePayPartDiscountDisableOrFlex"
import { AiFillStar } from "react-icons/ai"

const ShoppingCart = () =>{

  const {
    articlesCart,
    cartFilledOrNot,
    userName,
    setOpenPurchaseModal,
    discountCant,
    buyButtonEnableDisable,
    shopingCartStatus,
    shopingCartHeight
  } = useContext(AppContext)

  useCartFilledOrNot()
  const { payPartDiscountDisableOrFlex } = usePayPartDiscountDisableOrFlex({ discountCant, articlesCart })

  return(
    <MainContainer shopingCartStatus={shopingCartStatus} shopingCartHeight={shopingCartHeight}>
      <Items>
        {articlesCart.length > 0 && articlesCart.map(item =>(
          <ItemOnCart
            item={item}
            key={uuidv4()}
          />
        ))}
      </Items>
      <PayPartContainer>
        <div>
          {
            articlesCart.length>0 && userName
              ? <Price>Total: AR$ {totalCount(articlesCart, discountCant)}</Price>
              : null
          }
          {
            (cartFilledOrNot === true && userName && !!articlesCart.length && buyButtonEnableDisable.disabled)
              && 
                <BuyLink opacity={buyButtonEnableDisable.opacity} onClick={() => buy(setOpenPurchaseModal)}>
                  <BorderContainer>
                    <Button>Comprar</Button>
                  </BorderContainer>
                </BuyLink>
          }
          {
          cartFilledOrNot === false
            &&  <NoPrice>
                  Ingrese un item en el carrito
                </NoPrice>
          }
        </div>
        <div>
          {articlesCart.length>0 && userName
            ? <PayPartDiscount disableOrFlex={payPartDiscountDisableOrFlex}>
                <Discount>
                  {"Descuento: AR$ "+ Math.floor(discountCant/12) * 1200}
                </Discount>
                <DiscountPips>
                  {discountCant}/{Math.floor(discountCant/12)*12+12}<Star />
                </DiscountPips>
              </PayPartDiscount>
            : null
          }
        </div>
      </PayPartContainer>
    </MainContainer>
  )
}

const apearCart = css`
  z-index: 3;
  position: fixed;
  width: 20%;
  right: 0;
  top: 9%;
  background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
  border-bottom: 2px solid #AC8DAF;
  border-right: 1px solid #AC8DAF;
  border-left: 1px solid #AC8DAF;
  transition: 1s;

  @media only screen and (max-width: 1220px){
    z-index: 3;
    position: fixed;
    width: 20%;
    right: 0;
    background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
    border-bottom: 2px solid #AC8DAF;
    border-right: 1px solid #AC8DAF;
    border-left: 1px solid #AC8DAF;
    transition: 1s;
  }
  @media only screen and (max-width: 991px){
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 0%;
    background: linear-gradient(90deg, #ebe9eb 3%, white 50%) 0px 0px;
    border-bottom: 2px solid #AC8DAF;
    border-right: none;
    border-left: none;

    ::-webkit-scrollbar{
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 138px;
    background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
    border-bottom: 2px solid #AC8DAF;
    border-right: none;
    border-left: none;
    transition: 1s;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

const desapearCart = css`
  z-index: 3;
  position: fixed;
  width: 20%;
  right: 0;
  top: 0%;
  background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
  border-bottom: 2px solid #AC8DAF;
  border-right: 1px solid #AC8DAF;
  border-left: 1px solid #AC8DAF;
  transition: 1s;
  transition-delay: 0.3s;

  @media only screen and (max-width: 991px){
    z-index: 3;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    right: 0;
    top: 0%;
    background: linear-gradient(0deg, #ebe9eb 1%, white 100%) 0px 0px;
    border-bottom: 2px solid #AC8DAF;
    border-right: none;
    border-left: none;

    ::-webkit-scrollbar{
      display: none;
    }
  }
`

const MainContainer = styled.div`
  ${props => props.shopingCartStatus === "off" ? desapearCart : apearCart }
  ${props => props.shopingCartHeight === "auto" ? "height: auto" : "height: 58px"}
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 50vh;
  @media only screen and (max-width: 991px){
    max-height: 60vh;
  }
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const PayPartContainer = styled.div`
  margin-top: 10px;
  border-top: 2px solid #AC8DAF;
  
  div{
    :nth-child(1){
      display: flex;
      align-items: center;
      padding-top: 1%;
      padding-bottom: 1%;
    }
  }
  @media only screen and (max-width: 991px) {
    div{
      :nth-child(1){
        display: flex;
        align-items: center;
        padding-top: 1%;
        padding-bottom: 1%;
      }
    }
    margin-top: 10px;
  }
`

const PayPartDiscount = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 2px solid #AC8DAF;
  padding-top: 1%;
  padding-bottom: 1%;
  ${props => props.disableOrFlex === "flex" ? "display: flex" : "display: none"}
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`

const Discount = styled.div`
`

const DiscountPips = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

const Star = styled(AiFillStar)`
  height: 20px;
  width: 20px;
  color: #AC8DAF;
`

const NoPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
`

const BuyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  margin-left: 5%;
  padding: 3px;
  box-shadow: 0px 0px 3px 2.5px #AC8DAF;
  text-decoration: none;
  cursor: pointer;
  :hover{
    transform: scale(1.05);
  }
  ${props => props.opacity === "1" ? "opacity: 1" : "opacity: 0.5"}
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 90px;
  background-color: white;
  border-radius: 60px;
  border: none;
`

export { ShoppingCart }