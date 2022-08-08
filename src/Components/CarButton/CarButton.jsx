import React from "react"
import styled from "styled-components"
import visibleCar from "./visibleCar"

const CarButton = ({showCart}) =>{
  return(
    <Button>
      <button onClick={() => visibleCar(showCart)}>Car</button>
    </Button>
  )
}

const Button = styled.div`
  position: absolute;
  left: 80%;
  button{
    height: 80px;
    width: 230px;
  }
`

export default CarButton