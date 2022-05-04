import React, { useContext, useRef } from "react"
import { AppContext } from "../Context/AppContext"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ItemOnCart } from "./ItemOnCart"

const ShoppingCart = ({ showCart }) =>{
    const {
      articlesCart
    } = useContext(AppContext)

    const invisibleCar = () =>{
      showCart.current.className = "desapearCart"
      setTimeout(() =>{
        showCart.current.className = "CartOff"
      }, 980)
    }

  return(
    <div ref={showCart} className={"CartOff"}>
      <ExitButton><button onClick={invisibleCar}>X</button></ExitButton>
      <CartTittle><h1>Agregados al carrito</h1></CartTittle>
      {articlesCart.map(item =>(
        <ItemOnCart
          item={item}
          key={uuidv4()}
        />
      ))}
    </div>
  )
}

const ExitButton = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 1%;
  right: 5%;
`

const CartTittle = styled.div`
  position: relative;
  left: 27%;
  top: 5%;
`
export { ShoppingCart }