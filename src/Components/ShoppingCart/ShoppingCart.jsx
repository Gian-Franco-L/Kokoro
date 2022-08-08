import React, { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ItemOnCart } from "../ItemOnCart/ItemOnCart"
import { invisibleCar, totalCount } from "./invCar&totalCount"

const ShoppingCart = ({ showCart }) =>{
    const {
      articlesCart
    } = useContext(AppContext)

  return(
    <div ref={showCart} className={"CartOff"}>
      <TittleBack>
        <ExitButton><button onClick={() =>invisibleCar(showCart)}>X</button></ExitButton>
        <CartTittle><h1>Agregados al carrito</h1></CartTittle>
      </TittleBack>
      <Items>
        {articlesCart.map(item =>(
          <ItemOnCart
            item={item}
            key={uuidv4()}
          />
        ))}
      </Items>
      <PayPart>
        <Price>
          {articlesCart.length>0 && totalCount(articlesCart)}
        </Price>
        <NoPrice>
          {articlesCart.length===0 && "Ingrese un item en el carrito"}
        </NoPrice>
      </PayPart>
    </div>
  )
}

const TittleBack = styled.div`
`
const ExitButton = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 1%;
  right: 5%;
`

const CartTittle = styled.div`
  margin-top: 10%;
  margin-left: 25%;
`

const Items = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const PayPart = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
`

const Price = styled.div`
`
const NoPrice = styled.div`
`
export { ShoppingCart }