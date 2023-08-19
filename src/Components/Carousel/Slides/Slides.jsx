import React from "react"
import styled from "styled-components"
import bolsos from "../../../img/bolso.jpeg"
import almohadones from "../../../img/25.jpeg"
import colgantes from "../../../img/colgante.jpeg"
import canastas from "../../../img/canastas.jpeg"
import tutores from "../../../img/tutores.jpeg"
import caminos from "../../../img/caminos.jpeg"
import baberos from "../../../img/baberos.jpeg"
import botita from "../../../img/botita.jpeg"
import caja from "../../../img/caja.jpeg"
import batitas from "../../../img/batitas.jpeg"
import bombachudos from "../../../img/bombachudos.jpeg"
import turbantes from "../../../img/turbantes.jpeg"
import { Slide } from "../../Carousel/Carousel"

const Slides = () =>{
    return(
        <>
        {window.matchMedia("(max-width: 991px)").matches
          ? <>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={batitas}>
                    <TextSlide>Batitas</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={caja}>
                    <TextSlide>Caja Coneja</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={baberos}>
                    <TextSlide>Baberos</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={botita}>
                    <TextSlide>Botitas</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={bombachudos}>
                    <TextSlide>Bombachudos</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={turbantes}>
                    <TextSlide>Turbantes</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={bolsos}>
                    <TextSlide>Bolsos</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={almohadones}>
                    <TextSlide>Almohadones</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={colgantes}>
                    <TextSlide>colgantes</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={canastas}>
                    <TextSlide>Canastas</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={tutores}>
                    <TextSlide>Tutores</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <ImgMobile img={caminos}>
                    <TextSlide>Caminos</TextSlide>
                  </ImgMobile>
                </SlideBackground>
              </Slide>
            </>
          : <>
              <Slide>
                <SlideBackground>
                  <Img1 img={botita}>
                    <TextSlide>Botitas</TextSlide>
                  </Img1>
                  <Img2 img={baberos}>
                    <TextSlide>Baberos</TextSlide>
                  </Img2>
                  <Img3 img={caja}>
                    <TextSlide>Caja Coneja</TextSlide>
                  </Img3>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <Img1 img={batitas}>
                    <TextSlide>Batitas</TextSlide>
                  </Img1>
                  <Img2 img={bombachudos}>
                    <TextSlide>Bombachudos</TextSlide>
                  </Img2>
                  <Img3 img={turbantes}>
                    <TextSlide>Turbantes</TextSlide>
                  </Img3>
                </SlideBackground>
              </Slide>
              <Slide>
                <SlideBackground>
                  <Img1 img={bolsos}>
                    <TextSlide>Bolsos</TextSlide>
                  </Img1>
                  <Img2 img={almohadones}>
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
        }
        </>
    )
}

const SlideBackground = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  @media only screen and (max-width: 991px) {
    height: 85vh;
    margin-top: 65px;
  }
  @media only screen and (max-width: 280px) {
    height: 100vh;
    margin-top: 70px;
  }
`

const Img1 = styled.div`
  position: relative;
  height: 100%;
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
  height: 100%;
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
  height: 100%;
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

const ImgMobile = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 300px) {
    height: 90%;
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
    font-size: clamp(1rem, 20vw, 5rem);
  }
`


export { Slides }