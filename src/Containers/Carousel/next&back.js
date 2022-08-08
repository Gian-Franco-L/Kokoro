const next = (slideCarousel) =>{
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

const back = (slideCarousel) =>{
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

export { next, back }