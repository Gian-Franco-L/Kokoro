import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { AiFillCaretLeft as LeftArrow} from "react-icons/ai";
import { AiFillCaretRight as RightArrow} from "react-icons/ai";
import { next, back } from "./next&back"

const Carousel = ({ children }) =>{
  
  const slideCarousel = useRef(null)
  const intervalCarousel = useRef(null)

  // useEffect(() =>{
  //   intervalCarousel.current = setInterval(() =>{
  //     next(slideCarousel)
  //   }, 4000)

  //   slideCarousel.current.addEventListener("mouseenter", () =>{
  //     console.log("asd");
  //     clearInterval(intervalCarousel.current)
  //   })
  //   slideCarousel.current.addEventListener("mouseleave", () =>{
  //     intervalCarousel.current = setInterval(() =>{
  //       next(slideCarousel)
  //     }, 4000)
  //   })
  // }, [])

  return(
    <MainContainer>
      <ImgCarousel ref={slideCarousel}>
        {children}
      </ImgCarousel>
      <ButtonsCarousel>
        <Button onClick={() => back(slideCarousel)}>
					<LeftArrow />
        </Button>
        <Button right onClick={() => next(slideCarousel)}>
          <RightArrow />
        </Button>
      </ButtonsCarousel>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 5%;
  height: 91vh;
`
const ImgCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
const Slide = styled.div`
  position: relative;
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 1;
  height: 100vh;
  background-color: #f1f1f1;

  img {
      width: 100%;
      vertical-align: top;
  }
`
const TextSlide = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
	color: white;
	width: 100%;
	padding-top: 10px;
  padding-bottom: 10px;
	bottom: 0;
	text-align: center;
	font-size: 20px;

	@media screen and (max-width: 700px){
		position: relative;
		background-color: black;
	}
`
const ButtonsCarousel = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 2;
	pointer-events: none;
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
	width: 50px;
	height: 100%;
	text-align: center;
	transition: 0.3s ease all;

	${props => props.right ? "right: 0" : "left: 0"}
`

export { Carousel, Slide, TextSlide }