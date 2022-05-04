import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { AiFillCaretLeft as LeftArrow} from "react-icons/ai";
import { AiFillCaretRight as RightArrow} from "react-icons/ai";



const Carousel = ({ children }) =>{
  
  const slideCarousel = useRef(null)
  const intervalCarousel = useRef(null)

  const next = () =>{
    if(slideCarousel.current.children.length > 0){
      const firstElement = slideCarousel.current.children[0]

      slideCarousel.current.style.transition = "1000ms ease-out all"

      const slideWidth = slideCarousel.current.children[0].offsetWidth

      slideCarousel.current.style.transform = `translateX(-${slideWidth}px)`

      const Transition = () =>{
        slideCarousel.current.style.transition = "none"
        slideCarousel.current.style.transform = "translateX(0)"

        slideCarousel.current.appendChild(firstElement)

        slideCarousel.current.removeEventListener("transitionend", Transition)
      }

      slideCarousel.current.addEventListener("transitionend", Transition)
    }
  }
  
  const back = () =>{
    if(slideCarousel.current.children.length > 0){
      const index = slideCarousel.current.children.length - 1
      const lastElement = slideCarousel.current.children[index]
      slideCarousel.current.insertBefore(lastElement, slideCarousel.current.firstChild)

      const slideWidth = slideCarousel.current.children[0].offsetWidth
      slideCarousel.current.style.transition = "none"
      slideCarousel.current.style.transform = `translateX(-${slideWidth}px)`
      

      setTimeout(()=>{
        slideCarousel.current.style.transition = "1000ms ease-out all"
        slideCarousel.current.style.transform = "translateX(0)"
      }, 0)
    }
  }

  useEffect(() =>{
    intervalCarousel.current = setInterval(() =>{
      next()
    }, 3000)

    slideCarousel.current.addEventListener("mouseenter", () =>{
      clearInterval(intervalCarousel.current)
    })
    slideCarousel.current.addEventListener("mouseleave", () =>{
      intervalCarousel.current = setInterval(() =>{
        next()
      }, 3000)
    })
  }, [])

  return(
    <MainContainer>
      <ImgCarousel ref={slideCarousel}>
        {children}
      </ImgCarousel>
      <ButtonsCarousel>
        <Button onClick={back}>
					<LeftArrow />
        </Button>
        <Button right onClick={next}>
          <RightArrow />
        </Button>
      </ButtonsCarousel>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
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
  z-index: 10;
  max-heigth: 500px;

  img {
      width: 100%;
      vertical-align: top;
  }
`
const TextSlide = styled.div`
  position: absolute;
  background: ${props => props.colorFondo ? props.colorFondo : "rgba(0, 0, 0, 0.5)"};
	color: ${props => props.colorTexto ? props.colorTexto : "white"};
	width: 100%;
	padding: 10px 60px;
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
	z-index: 20;
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