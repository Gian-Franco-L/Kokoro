import React, { useContext } from "react"
import styled from "styled-components"
import { BsFillCartCheckFill } from "react-icons/bs"
import { BsFillCartXFill } from "react-icons/bs"
import { openCloseCart } from "../openCloseCart"
import { AppContext } from "../../../Context/AppContext"
import "../../../CSS/Animation.css"

const CarButton = ({ showCart }) =>{

  const {
    cartSwitch,
    setCartSwitch,
    itemCartAux,
    setItemCartAux,
    articlesCart,
    onOffCarButton,
    setOnOffCarButton,
    setArticlesCart,
    setCartFilledOrNot
    } = useContext(AppContext)

  return(
    <CartButton>
      <button disabled={onOffCarButton} onClick={() => openCloseCart(
          showCart,
          cartSwitch,
          setCartSwitch,
          articlesCart,
          setArticlesCart,
          itemCartAux,
          setItemCartAux,
          setOnOffCarButton,
          setCartFilledOrNot
        )}>{
          cartSwitch === "on"
            ? <BsFillCartCheckFill className="cartIcon"/>
            : <BsFillCartXFill className="cartIcon"/>
        }
          </button>
    </CartButton>
  )
}

const CartButton = styled.div`
  position: absolute;
  top: 23%;
  right: 10.8%;
  button{
    height: 50px;
    width: 230%;
    border-radius: 10px;
    border: 2px solid black;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  button:hover{
    transform: scale(1.05)
  }
  button:disabled{
    background-color: #eeeeee;
    color: black;
  }
`

export { CarButton }