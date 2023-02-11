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
      <PayPart>
        <div>
          <Price>
            {articlesCart.length>0 && userName 
              ? "Total: AR$ "+totalCount(articlesCart)
              : null
            }
          </Price>
          {(cartFilledOrNot === true && userName && !!articlesCart.length) && <div><Button ref={buyButton} onClick={buy}>Comprar</Button></div>}
        </div>
        <NoPrice>
          {cartFilledOrNot === false && "Ingrese un item en el carrito"}
        </NoPrice>
      </PayPart>
    </div>
  )
}


const Items = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 50vh;
  @media only screen and (max-width: 991px){
    max-height: 50vh;
  }
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const PayPart = styled.div`
  height: 15%;
  margin-top: 5%;
  margin-bottom: 5%;
  div{
    display: flex;
    justify-content: space-around;
  }
  @media only screen and (max-width: 991px){
    height: 15%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`

const Price = styled.div`
  display: flex;
  justify-content: center;
`
const NoPrice = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
`

const Button = styled.button`
  border-radius: 30px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-color: white;
  border: none;
  cursor: pointer;
  :hover{
    transform: scale(1.05)
  }
  :active{
    box-shadow: 1px 1px 5px 3px #e3c69a;
  }
`

export { ShoppingCart }