import React from "react"
import styled from "styled-components"

const Footer = () =>{
  return(
    <MainContainer>
      <div>
        <h2>Acerca de mi</h2>
        <Items>
          <h3>Hola soy la moniquita bordadora</h3>
        </Items>
      </div>
      <div>
        <h2>Como comprar</h2>
        <Items>
        <h3>Al apretar el boton un producto en especifico se agregara</h3>
        </Items>
      </div>
      <div>
        <h2>Contactame</h2>
        <Items>
          <h5>WhatsApp</h5>
          <h5>Instagram</h5>
          <h5>Facebook</h5>
        </Items>
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 200px;
  width: 100%;
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: top;
`

const Items = styled.div`
  margin-top: 20px;
  max-width: 250px;
`

export { Footer }