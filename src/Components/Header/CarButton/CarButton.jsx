import React, { useContext } from "react"
import styled from "styled-components"
import { visibleCar } from "./visibleCar"
import { AppContext } from "../../../Context/AppContext"

const CarButton = ({showCart}) =>{

  const {
    cartSwitch,
    setCartSwitch
    } = useContext(AppContext)

  return(
    <Button>
      <button onClick={() => visibleCar(showCart, cartSwitch, setCartSwitch)}>Car</button>
    </Button>
  )
}

const Button = styled.div`
  left: 80%;
  button{
    height: 70px;
    width: 230px;
  }
`

export { CarButton }