const next = (slideCarousel, setButtonsCarouselState) =>{
  if(slideCarousel.current.children.length > 0){
    if(window.matchMedia("(max-width: 991px)").matches){
      const firstElement = slideCarousel.current.children[0]

      slideCarousel.current.style.transition = "450ms ease-out all"

      const slideWidth = slideCarousel.current.children[0].offsetWidth

      slideCarousel.current.style.transform = `translateX(-${slideWidth}px)`

      const Transition = () =>{
        slideCarousel.current.style.transition = "none"
        slideCarousel.current.style.transform = "translateX(0)"

        slideCarousel.current.appendChild(firstElement)

        slideCarousel.current.removeEventListener("transitionend", Transition)
      }

      slideCarousel.current.addEventListener("transitionend", Transition)
    }else{
      const firstElement = slideCarousel.current.children[0]

      slideCarousel.current.style.transition = "800ms ease-out all"

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
  if(setButtonsCarouselState !== undefined){
    setButtonsCarouselState(false)
    setTimeout(() =>{
      setButtonsCarouselState(true)
    }, 1000)
  }
}
const back = (slideCarousel, setButtonsCarouselState) =>{
  if(slideCarousel.current.children.length > 0){
    if(window.matchMedia("(max-width: 991px)").matches){
      const index = slideCarousel.current.children.length - 1
      const lastElement = slideCarousel.current.children[index]
      slideCarousel.current.insertBefore(lastElement, slideCarousel.current.firstChild)

      const slideWidth = slideCarousel.current.children[0].offsetWidth
      slideCarousel.current.style.transition = "none"
      slideCarousel.current.style.transform = `translateX(-${slideWidth}px)`
      
      setTimeout(()=>{
        slideCarousel.current.style.transition = "450ms ease-out all"
        slideCarousel.current.style.transform = "translateX(0)"
      }, 100)
    }else{
      const index = slideCarousel.current.children.length - 1
      const lastElement = slideCarousel.current.children[index]
      slideCarousel.current.insertBefore(lastElement, slideCarousel.current.firstChild)
      
      const slideWidth = slideCarousel.current.children[0].offsetWidth
      slideCarousel.current.style.transition = "none"
      slideCarousel.current.style.transform = `translateX(-${slideWidth}px)`
      
      setTimeout(()=>{
        slideCarousel.current.style.transition = "800ms ease-out all"
        slideCarousel.current.style.transform = "translateX(0)"
      }, 100)
    }
  }
  if(setButtonsCarouselState !== undefined){
    setButtonsCarouselState(false)
    setTimeout(() =>{
      setButtonsCarouselState(true)
    }, 1000)
  }
}

export { next, back }