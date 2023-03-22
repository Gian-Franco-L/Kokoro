import React, { useEffect } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ItemOnCart } from "./ItemOnCart/ItemOnCart"
import { totalCount } from "./totalCount"

const ShoppingCart = ({
  showCart,
  articlesCart,
  itemCartAux,
  cartButton,
  cartFilledOrNot,
  setCartFilledOrNot,
  userName,
  acountRef,
  setOpenPurchaseModal,
  buyButton
}) =>{

  useEffect(() =>{
    articlesCart.length>0
      ? showCart.current.style.height = "auto"
      : showCart.current.style.height = "58px"

      if(itemCartAux.length === 0 && articlesCart.length === 0){
        setCartFilledOrNot(false)
      }else{
        setCartFilledOrNot(true)
      }
  }, [articlesCart, articlesCart, articlesCart])

  async function buy(){
    if(userName){
      setOpenPurchaseModal(true)
    }
    else{
      acountRef.current.classList.add("notLogged")
      setTimeout(() =>{
        acountRef.current.classList.remove("notLogged")
      },[1000])
    }
  }

  return(
    <div ref={showCart} className={"startingCart"}>
      <Items>
        {articlesCart.length > 0 && articlesCart.map(item =>(
          <ItemOnCart
            item={item}
            key={uuidv4()}
            cartButton={cartButton}
          />
        ))}
      </Items>
      <PayPartContainer>
        <PayPart>
          <Price>
            {articlesCart.length>0 && userName 
              ? "Total: AR$ "+totalCount(articlesCart)
              : null
            }
          </Price>
          {(cartFilledOrNot === true && userName && !!articlesCart.length) && <BuyLink ref={buyButton} onClick={buy}><BorderContainer><Button>Comprar</Button></BorderContainer></BuyLink>}
        </PayPart>
        <NoPrice>
          {cartFilledOrNot === false && "Ingrese un item en el carrito"}
        </NoPrice>
      </PayPartContainer>
    </div>
  )
}

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
  height: 15%;
  margin-top: 5%;
  border-top: 2px solid #AD8B73;
  @media only screen and (max-width: 991px){
    height: 15%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`

const PayPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6px;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
`
const NoPrice = styled.h3`
  display: flex;
  justify-content: center;
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  @media only screen and (max-width: 991px){
    /* padding-top: 1%; */
  }
`

const BuyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 3px;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
  text-decoration: none;
  cursor: pointer;
  :hover{
    transform: scale(1.05);
  }
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
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