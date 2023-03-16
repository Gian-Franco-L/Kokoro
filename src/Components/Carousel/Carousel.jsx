import React, { useRef } from "react"
import styled from "styled-components"
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { next, back } from "./next&back"

const Carousel = ({ children }) =>{
  
  const slideCarousel = useRef(null)
  const intervalCarousel = useRef(null)
  const whiteLine = document.getElementById("whiteLine")

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

  // background: linear-gradient(0deg, black 55%, white 25%) 0px 0px;

  return(
    <MainContainer>
      <ImgCarousel ref={slideCarousel}>
        {children}
      </ImgCarousel>
      <ButtonsCarousel id="whiteLine">
        <Button
          onClick={() => back(slideCarousel)}
          onMouseEnter={() => whiteLine.style.background = "linear-gradient(90deg, white -9%, transparent 5%) 0px 0px"}
          onMouseLeave={() => whiteLine.style.background = ""}>
					<LeftArrow />
        </Button>
        <Button
          right
          onClick={() => next(slideCarousel)}
          onMouseEnter={() => whiteLine.style.background = "linear-gradient(-90deg, white -9%, transparent 5%) 0px 0px"}
          onMouseLeave={() => whiteLine.style.background = ""}>
          <RightArrow />
        </Button>
      </ButtonsCarousel>
    </MainContainer>
  )
}

const LeftArrow = styled(AiOutlineDoubleLeft)`
  font-size: 2rem;
  color: white;
`

const RightArrow = styled(AiOutlineDoubleRight)`
  font-size: 2rem;
  color: white;
`

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 3.9%;
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
	position: absolute;
	width: 100%;
	height: 76.9%;
	top: 2%;
	z-index: 2;
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
	${props => props.right ? "right: 0" : "left: 0"}
`

export { Carousel, Slide }