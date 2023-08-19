import React, { useContext } from "react"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { next, back } from "./Functions/CarouselFunctions"
import { AppContext } from "../../Context/AppContext";
import { useCarouselMovement } from "../../Hooks/useCarouselMovement";

const Carousel = ({ children, intervalCarousel }) =>{

  const {
    buttonsCarouselState,
    setButtonsCarouselState
  } = useContext(AppContext)

  const { slideCarousel, slideButtons } = useCarouselMovement({ setButtonsCarouselState, intervalCarousel })

  return(
    <MainContainer ref={intervalCarousel}>
      <ImgCarousel ref={slideCarousel}>
        {children}
      </ImgCarousel>
      <ButtonsCarousel ref={slideButtons}>
        <Button onClick={() => buttonsCarouselState && back(slideCarousel, setButtonsCarouselState)}>
					<LeftArrow />
        </Button>
        <Button right onClick={() => buttonsCarouselState && next(slideCarousel, setButtonsCarouselState)}>
          <RightArrow />
        </Button>
      </ButtonsCarousel>
    </MainContainer>
  )
}

const LeftArrow = styled(FaArrowLeft)`
  font-size: 2.5rem;
  color: white;
`

const RightArrow = styled(FaArrowRight)`
  font-size: 2.5rem;
  color: white;
`

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 4.5%;
`
const ImgCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
const Slide = styled.div`
  z-index: 1;
  position: relative;
  min-width: 100vw;
  max-height: 92.5vh;
  overflow: hidden;
  transition: 0.3s ease all;
  background-color: #f1f1f1;
  img {
      width: 100%;
  }
  @media only screen and (max-width: 991px){
    max-height: 100vh;
  }
`

const ButtonsCarousel = styled.div`
	z-index: 2;
	position: absolute;
	width: 98.3%;
	height: 77%;
	top: 2%;
  margin-left: 1%;
	pointer-events: none;
  ${props => props.right ? "right: 1" : "left: 0"}
`
const Button = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 80px;
	height: 100%;
	text-align: center;
	transition: 0.3s ease all;
  @media only screen and (max-width: 991px) {
    display: none;
  }
	${props => props.right ? "right: -5px" : "left: -5px"}
`

export { Carousel, Slide }