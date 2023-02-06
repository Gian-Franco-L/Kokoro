import React from "react"
import styled from "styled-components"
import bolsos from "../../../img/bolso.jpeg"
import veinticinco from "../../../img/25.jpeg"
import colgantes from "../../../img/colgante.jpeg"
import canastas from "../../../img/canastas.jpeg"
import tutores from "../../../img/tutores.jpeg"
import caminos from "../../../img/caminos.jpeg"
import { Slide } from "../../Carousel/Carousel"

const Slides = () =>{
    return(
        <>
          <Slide>
            <SlideBackground>
              <Img1 img={bolsos}/>
              <Img2 img={veinticinco}/>
              <Img3 img={colgantes}/>
              <FirstTextSlide>Bolsos</FirstTextSlide>
              <SecondTextSlide>Almohadones</SecondTextSlide>
              <ThirdTextSlide>Colgantes</ThirdTextSlide>
            </SlideBackground>
          {/* <a href="/"><img src={fondo} alt="0" /></a> */}
          </Slide>
          <Slide>
          <SlideBackground>
            <Img1 img={canastas}/>
            <Img2 img={tutores}/>
            <Img3 img={caminos}/>
            <FirstTextSlide>Canastas</FirstTextSlide>
            <SecondTextSlide>Tutores</SecondTextSlide>
            <ThirdTextSlide>Caminos</ThirdTextSlide>
          </SlideBackground>
            {/* <a href="/"><img src={artcinco} alt="1" /></a> */}
          </Slide>
          <Slide>
          <SlideBackground>

          </SlideBackground>
            {/* <a href="/"><img src={artdos} alt="2" /></a> */}
          </Slide>
        </>
        
    )
}

const SlideBackground = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  background-color: #ebe9eb;
  @media only screen and (max-width: 991px) {
    background-color: black;
  }
`
const Img1 = styled.div`
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

const FirstTextSlide = styled.div`
  position: absolute;
  font-family: 'Festive', cursive;
  background: #ceab9351;
	color: black;
  height: 180px;
	width: 33%;
	bottom: 0;
	text-align: center;
	font-size: 7.4rem;

	@media only screen and (max-width: 991px) {
    display: none;
  }
`
const SecondTextSlide = styled.div`
  position: absolute;
  font-family: 'Festive', cursive;
  background: #ceab9351;
	color: black;
  height: 180px;
	width: 32%;
	bottom: 0;
  left: 33.8%;
	text-align: center;
	font-size: 7.4rem;

	@media only screen and (max-width: 991px) {
    display: none;
  }
`
const ThirdTextSlide = styled.div`
  position: absolute;
  font-family: 'Festive', cursive;
  background: #ceab9351;
	color: black;
  height: 180px;
	width: 32.1%;
	bottom: 0;
  left: 66.6%;
	text-align: center;
	font-size: 7.4rem;

	@media only screen and (max-width: 991px) {
    display: none;
  }
`


export { Slides }