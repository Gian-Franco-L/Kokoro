import { useEffect, useRef } from "react"
import { next, back } from "../Components/Carousel/Functions/CarouselFunctions"

export function useCarouselMovement({ setButtonsCarouselState, intervalCarousel }){

  const slideCarousel = useRef(null)
  const slideButtons = useRef(null)

  useEffect(() =>{
    console.log("Carousel moved");
    if(window.matchMedia("(max-width: 991px)").matches){
      let xClick, xMove, xResu, lastResu
      intervalCarousel.current = setInterval(() =>{
        if(intervalCarousel.current === null){
          clearInterval(intervalCarousel.current)
        }else{
          if(slideCarousel.current !== null) next(slideCarousel)
        }
      }, 3200)
      document.addEventListener("touchstart", (event) =>{
        xClick = event.targetTouches[0].clientX
        clearInterval(intervalCarousel.current)
      }, true);
      document.addEventListener("touchmove", (event) =>{
        xMove = event.targetTouches[0].clientX
        xResu = Math.floor(xClick - xMove)
      })
      document.addEventListener("touchend", () =>{
        if(lastResu === undefined || lastResu !== xResu){
          lastResu = xResu
          if(xResu < 5){
            if(slideCarousel.current !== null) back(slideCarousel, setButtonsCarouselState)
          }else if(xResu > 5){
            if(slideCarousel.current !== null) next(slideCarousel, setButtonsCarouselState)
          }
        }
        intervalCarousel.current = setInterval(() =>{
          if(slideCarousel.current !== null) next(slideCarousel)
        }, 3200)
      }, true);
    }else{
      intervalCarousel.current = setInterval(() =>{
        if(intervalCarousel.current === null){
          clearInterval(intervalCarousel.current)
        }else{
          if(slideCarousel.current !== null) next(slideCarousel)
        }
      }, 4000)
    }
    if(!window.matchMedia("(max-width: 991px)").matches){
      slideCarousel.current.addEventListener("mouseenter", () =>{
        clearInterval(intervalCarousel.current)
      })
      slideButtons.current.addEventListener("mouseenter", () =>{
        clearInterval(intervalCarousel.current)
      })
      slideCarousel.current.addEventListener("mouseleave", () =>{
        intervalCarousel.current = setInterval(() =>{
          if(intervalCarousel.current === null){
            clearInterval(intervalCarousel.current)
          }else{
            if(slideCarousel.current !== null) next(slideCarousel)
          }
        }, 4000)
      })
      slideButtons.current.addEventListener("mouseleave", () =>{
        intervalCarousel.current = setInterval(() =>{
          if(intervalCarousel.current === null){
            clearInterval(intervalCarousel.current)
          }else{
            if(slideCarousel.current !== null) next(slideCarousel)
          }
        }, 4000)
      })
    }
  }, [])

  return { slideCarousel, slideButtons }
}