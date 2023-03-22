import React from "react"
import styled from "styled-components"
import bolsos from "../../../img/bolso.jpeg"
import veinticinco from "../../../img/25.jpeg"
import colgantes from "../../../img/colgante.jpeg"
import canastas from "../../../img/canastas.jpeg"
import tutores from "../../../img/tutores.jpeg"
import caminos from "../../../img/caminos.jpeg"
import portadaCelu from "../../../img/portadaCelu.jpeg"
import portadaPc from "../../../img/portadaPc.jpeg"
import { Slide } from "../../Carousel/Carousel"

const Slides = () =>{
    return(
        <>
          <Slide>
            <MainBackground portadaCelu={portadaCelu} portadaPc={portadaPc}>
              <MainTextSlide>Bienvenido a mí página web</MainTextSlide>
            </MainBackground>
          </Slide>
          <Slide>
            <SlideBackground>
              <Img1 img={bolsos}>
                <TextSlide>Bolsos</TextSlide>
              </Img1>
              <Img2 img={veinticinco}>
                <TextSlide>Almohadones</TextSlide>
              </Img2>
              <Img3 img={colgantes}>
                <TextSlide>Colgantes</TextSlide>
              </Img3>
            </SlideBackground>
          </Slide>
          <Slide>
          <SlideBackground>
            <Img1 img={canastas}>
              <TextSlide>Canastas</TextSlide>
            </Img1>
            <Img2 img={tutores}>
              <TextSlide>Tutores</TextSlide>
            </Img2>
            <Img3 img={caminos}>
              <TextSlide>Caminos</TextSlide>
            </Img3>
          </SlideBackground>
          </Slide>
        </>
        
    )
}

const SlideBackground = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  background-color: #ebe9eb;
  background-image: url(${props => props.portadaPc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    height: 88vh;
    margin-top: 65px;
    background-image: url(${props => props.portadaCelu});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #FFF;
  }
  @media only screen and (max-width: 280px) {
    height: 100vh;
    margin-top: 70px;
  }
`

const MainBackground = styled.div`
  height: 88.5vh;
  width: 97.5%;
  margin-left: 1%;
  background-color: #ebe9eb;
  background-image: url(${props => props.portadaPc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  margin-top: 1%;
  @media only screen and (max-width: 991px) {
    height: 88vh;
    margin-top: 65px;
    background-image: url(${props => props.portadaCelu});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #FFF;
  }
  @media only screen and (max-width: 280px) {
    height: 100vh;
    margin-top: 70px;
  }
`

const Img1 = styled.div`
  position: relative;
  height: 840px;
  width: 31.8%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 1%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`
const Img2 = styled.div`
  position: relative;
  height: 840px;
  width: 31.8%;
  margin-top: 1%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`
const Img3 = styled.div`
  position: relative;
  height: 840px;
  width: 31.8%;
  margin-top: 1%;
  margin-left: 20px;
  margin-right: 20px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`

const MainTextSlide = styled.div`
position: absolute;
font-family: 'Festive', cursive;
background: #cdb7a951;
color: black;
height: 180px;
width: 97.5%;
bottom: 0;
text-align: center;
font-size: 7.8rem;

@media only screen and (max-width: 991px) {
  display: none;
}
`

const TextSlide = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Festive', cursive;
  background: #ceab9351;
	color: black;
  height: 180px;
	width: 100%;
	bottom: 0;
	text-align: center;
	font-size: clamp(1rem, 6vw, 7.4rem);

	@media only screen and (max-width: 991px) {
    display: none;
  }
`


export { Slides }