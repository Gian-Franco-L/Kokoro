import React from "react"
import styled from "styled-components"
import mercadopagoImg from "../../img/mercadopago2.jpg"
import efectivoImg from "../../img/efectivo3.png"
import face from "../../img/facebook.png"
import insta from "../../img/instagram.png"
import wpp from "../../img/whatsapp.png"
import { AiFillStar } from "react-icons/ai"

const Info = () =>{
  return(
    <MainContainer>
      <div>
        <Tittle><Star1 />Acerca de mi<Star2 /></Tittle>
        <Flex>
          <BorderContainer>
            <h6>Desde mis trece años me dedico a accesorios personales, decoración para el hogar, vestir comuniones y cumpleaños.</h6>
          </BorderContainer>
        </Flex>
      </div>
      <div>
        <Tittle><Star3 />Formas de pago<Star4 /></Tittle>
        <Flex>
          <BorderContainer>
              <img src={mercadopagoImg} alt="mercadoPagoImg" />
              <img src={efectivoImg} alt="efectivoImg" />
          </BorderContainer>
        </Flex>
      </div>
      <div>
        <Tittle><Star5 />Contacto<Star6 /></Tittle>
        <Flex>
          <BorderContainer>
            <a href="https://www.facebook.com/profile.php?id=100007108849316" target="_blank">
              <SocialIcon img={face}/>
            </a>
            <a href="https://www.instagram.com/monicaszeki/" target="_blank">
              <SocialIcon img={insta}/>
            </a>
            <a href="https://wa.me/541562965524" target="_blank">
              <SocialIcon img={wpp}/>
            </a>
          </BorderContainer>
        </Flex>
      </div>
    </MainContainer>
  )
}

const Star1 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  left: 13%;
  color: #AC8DAF;

  @media only screen and (max-width: 991px){
    left: 5%;
  }
`
const Star2 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  right: 13%;
  color: #AC8DAF;
  @media only screen and (max-width: 991px){
    right: 5%;
  }
`

const Star3 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  left: 10%;
  color: #AC8DAF;
  @media only screen and (max-width: 991px){
    left: 2%;
  }
`
const Star4 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  right: 10%;
  color: #AC8DAF;
  @media only screen and (max-width: 991px){
    right: 2%;
  }
`

const Star5 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  left: 21%;
  color: #AC8DAF;
  @media only screen and (max-width: 991px){
    left: 18%;
  }
`
const Star6 = styled(AiFillStar)`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 20%;
  right: 21%;
  color: #AC8DAF;
  @media only screen and (max-width: 991px){
    right: 18%;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 3%;

  @media only screen and (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
`

const Flex = styled.div`
  height: 75px;
  width: 350px;
  padding: 3px;
  margin-bottom: 5%;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 0px 8px 8px #AC8DAF;

  @media only screen and (max-width: 991px){
    width: 330px;
  }
  @media only screen and (max-width: 500px){
    width: 310px;
  }
  @media only screen and (max-width: 300px){
    width: 270px;
  }
`

const BorderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 30px;
  text-align: center;

  h6{
    padding: 3%;
    margin-bottom: 0%;
    font-size: clamp(.9rem, 3vw, 1rem);
  }

  img{
    height: 50px;
    width: 65px;
    align-self: center;
  }
`

const Tittle = styled.h4`
  position: relative;
  text-align: center;
  font-family: 'Festive', cursive;
  font-size: 2.5rem;
  @media only screen and (max-width: 730px) {
    margin-top: 5%;
  }
`

const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
` 

export { Info }