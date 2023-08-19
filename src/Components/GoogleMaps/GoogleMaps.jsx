import React from 'react'
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

const GoogleMaps = () =>{
  return(
    <MainContainer>
      <GoogleIFrame>
        <Tittle><Star1 />Ubicación<Star2 /></Tittle>
        <Flex>
          <BorderContainer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.155781184693!2d-58.55919582354781!3d-34.52428097298289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcba75b7bba42b%3A0xabfae4d48f41634e!2sDe%C3%A1n%20Funes%201148%2C%20B1607%20Villa%20Adelina%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1690571026540!5m2!1ses!2sar" width="1300" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </BorderContainer>
        </Flex>
      </GoogleIFrame>
    </MainContainer>
  )
}

// const Star1 = styled(AiFillStar)`
//   position: absolute;
//   left: -15%;
//   top: 40%;
//   font-size: clamp(1.5rem, 4vw, 4rem);
//   color: #AC8DAF;
// `
// const Star2 = styled(AiFillStar)`
//   position: absolute;
//   right: -20%;
//   top: 40%;
//   font-size: clamp(1.5rem, 4vw, 4rem);
//   color: #AC8DAF;
// `

const Star1 = styled(AiFillStar)`
  position: absolute;
  left: 36%;
  top: 32%;
  font-size: clamp(.7rem, 2vw, 1.5rem);
  color: #AC8DAF;
  background-color: #ebe9eb;
`
const Star2 = styled(AiFillStar)`
  position: absolute;
  left: 74.2%;
  top: 32%;
  font-size: clamp(.7rem, 2vw, 1.5rem);
  color: #AC8DAF;
  background-color: #ebe9eb;
`

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;
  margin-top: 5%;
`

const Tittle = styled.h1`
  position: relative;
  font-family: 'Festive', cursive;
  font-size: clamp(5rem, 15vw, 11rem);
  color: black;
  margin-right: 1%;
  scroll-margin-top: 140px;
  @media only screen and (max-width: 991px){
    margin-top: 50px;
    scroll-margin-top: 125px;
  }
`

const GoogleIFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;

  iframe{
    padding: 5px;
    width: 100%;
    border-radius: 30px;
  }

  @media only screen and (max-width: 991px){
    width: 100%;
  }
`

const Flex = styled.div`
  width: 80%;
  padding: 3px;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 8px #AC8DAF;

  @media only screen and (max-width: 730px) {
    width: 90%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
`

const BorderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 30px;
  text-align: center;
`

export { GoogleMaps }