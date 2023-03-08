import React from "react"
import styled from "styled-components"
import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import mercadopagoImg from "../../img/mercadopago2.jpg"

const Footer = () =>{
  return(
    <MainContainer>
      <Asd>
        <Flex>
          <h4>Acerca de mi</h4>
          <h6>Bordo desde los 4 años y odio a Julieta de gh</h6>
        </Flex>
        <Flex>
          <h4>Formas de pago</h4>
          <img src={mercadopagoImg} alt="" />
        </Flex>
      </Asd>
      <Asd>
        <Flex>
          <h4>Envio</h4>
          <h6>A convenir con el por wpp luego de su compra.</h6>
        </Flex>
        <Social>
          <Contact>Contacto</Contact>
          <SocialMedia>
            <a href="/"><FaceBook /></a>
            <a href="/"><Instagram /></a>
            <a href="/"><WhatsApp /></a>
          </SocialMedia>
        </Social>
      </Asd>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  color: black;
  background-color: white;
  justify-content: space-around;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
  margin-top: 6%;
  padding-top: 2%;
  padding-bottom: 2%;
  @media only screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Asd = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  justify-content: space-around;
  @media only screen and (max-width: 730px) {
    width: 100%;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  img{
    height: 35px;
  }

  h4{
    font-family: 'Festive', cursive;
    font-size: 3rem;
  }
  @media only screen and (max-width: 1415px) {
    margin-bottom: 5%;
  }
  @media only screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
  }
`

const Social = styled.div`
  width: 350px;
`

const Contact = styled.h4`
  text-align: center;
  font-family: 'Festive', cursive;
  font-size: 2.5rem;
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly
`

const FaceBook = styled(AiOutlineFacebook)`
  height: 30px;
  width: 30px;
  color: black;
`

const Instagram = styled(AiOutlineInstagram)`
  height: 30px;
  width: 30px;
  color: black;
`

const WhatsApp = styled(AiOutlineWhatsApp)`
  height: 30px;
  width: 30px;
  color: black;
`

export { Footer }