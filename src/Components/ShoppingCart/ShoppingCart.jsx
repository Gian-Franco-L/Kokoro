import React, { useEffect } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ItemOnCart } from "./ItemOnCart/ItemOnCart"
import { totalCount } from "./totalCount"

const ShoppingCart = ({ showCart, articlesCart, itemCartAux, cartButton, cartFilledOrNot, setCartFilledOrNot }) =>{

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
        <Price>
          {articlesCart.length>0 && "Total: AR$ "+totalCount(articlesCart)}
        </Price>
        <NoPrice>
          {cartFilledOrNot === false
            ? "Ingrese un item en el carrito"
            : null
          }
        </NoPrice>
      </PayPart>
    </div>
  )
}

const Items = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  } */
`

const PayPart = styled.div`
  height: 15%;
  margin-top: 5%;
  margin-bottom: 5%;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
`
const NoPrice = styled.div`
  display: flex;
  justify-content: center;
`
export { ShoppingCart }