import React from "react"
import styled from "styled-components"
import whatsapp from "../../img/whatsapp-brands.svg"
import facebook from "../../img/facebook-brands.svg"
import instagram from "../../img/instagram-brands.svg"
import { MdDriveFileMove } from "react-icons/md"

const Footer = () =>{
  return(
    <MainContainer>
      <div>
        <AboutMe>Acerca de mi</AboutMe>
        <Items>hola soy la moniquita bordadora</Items>
      </div>
      <div>
        <p></p>
      </div>
      <Social>
        <Contact>Contactame</Contact>
        <SocialMedia>
          <a href="/"><img src={facebook} alt="face" /></a>
          <a href="/"><img src={instagram} alt="insta" /></a>
          <a href="/"><img src={whatsapp} alt="wpp" /></a>
        </SocialMedia>
      </Social>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  color: black;
  background-color: white;
  justify-content: space-around;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
  margin-top: 6%;
`

const AboutMe = styled.h2`
  font-size: 1.7rem;
`

const Items = styled.p`
  margin-top: 10px;
  max-width: 250px;
  font-size: 1.3rem;
`

const Contact = styled.h2`
  font-size: 1.7rem;
`

const Social = styled.div`
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 60px;
  margin-top: 10px;

  img{
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
  }
`

export { Footer }