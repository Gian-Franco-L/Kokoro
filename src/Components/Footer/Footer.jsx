import React from "react"
import styled from "styled-components"
import mercadopagoImg from "../../img/mercadopago2.jpg"
import face from "../../img/facebook.png"
import insta from "../../img/instagram.png"
import wpp from "../../img/whatsapp.png"

const Footer = () =>{
  return(
    <MainContainer>
      <TwoItemsContainer>
        <Flex>
          <h4>Acerca de mi</h4>
          <h6>Desde mis trece años me dedico a accesorios personales, vestir comuniones y cumpleaños, incluyendo decoración para el hogar como se incluye en la página.</h6>
        </Flex>
        <Flex>
          <h4>Formas de pago</h4>
          <img src={mercadopagoImg} alt="" />
        </Flex>
      </TwoItemsContainer>
      <TwoItemsContainer>
        <Flex>
          <h4>Envíos</h4>
          <h6>A convenir con el vendedor por whatsapp luego de su compra.</h6>
        </Flex>
        <Social>
          <Contact>Contacto</Contact>
          <SocialMedia>
            <a href="https://www.facebook.com/profile.php?id=100007108849316" Target="_blank"><SocialIcon img={face}/></a>
            <a href="https://www.instagram.com/monicaszeki/" Target="_blank"><SocialIcon img={insta}/></a>
            <a href="https://wa.me/541562965524" Target="_blank"><SocialIcon img={wpp}/></a>
          </SocialMedia>
        </Social>
      </TwoItemsContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  color: black;
  background-color: white;
  justify-content: space-around;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  @media only screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
`

const TwoItemsContainer = styled.div`
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

  h4{
    font-family: 'Festive', cursive;
    font-size: 3rem;
  }

  img{
    height: 35px;
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
  justify-content: space-evenly;
  @media only screen and (max-width: 991px){
    margin-bottom: 3%;
  }
`
const SocialIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
` 

export { Footer }