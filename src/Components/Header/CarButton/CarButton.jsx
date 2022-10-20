import React, { useContext } from "react"
import styled from "styled-components"
import { BsFillCartCheckFill } from "react-icons/bs"
import { BsFillCartXFill } from "react-icons/bs"
import { openCloseCart } from "./openCloseCart"
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
  left: 100%;
  button{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
    background-color: #eeeeee;
  }
  button:hover{
    box-shadow: 0px 0px 10px 8px #FFFBE9;
  }
  button:disabled{
    background-color: #eeeeee;
    color: black;
  }
`

export { CarButton }