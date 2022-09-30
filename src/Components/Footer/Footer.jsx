import React from "react"
import styled from "styled-components"
import whatsapp from "../../img/whatsapp-brands.svg"
import facebook from "../../img/facebook-brands.svg"
import instagram from "../../img/instagram-brands.svg"

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
        <SocialMedia>
          <a href="/"><img src={facebook} alt="face" /></a>
        </SocialMedia>
        <SocialMedia>
          <a href="/"><img src={instagram} alt="insta" /></a>
        </SocialMedia>
        <SocialMedia>
          <a href="/"><img src={whatsapp} alt="wpp" /></a>
        </SocialMedia>
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 200px;
  width: 100%;
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: top;
`

const Items = styled.div`
  margin-top: 20px;
  max-width: 250px;
`

const SocialMedia = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  margin-bottom: 10px;
`

export { Footer }