import React from "react"
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import { Slide, TextSlide } from "../Carousel/Carousel"

const Slides = () =>{
    return(
        <>
          <Slide>
            <a href="/"><img src={img1} alt="1"></img></a>
              <TextSlide>
                <p>15% de descuento en este producto</p>
              </TextSlide>
          </Slide>
          <Slide>
            <a href="/"><img src={img2} alt="2"></img></a>
              <TextSlide>
                <p>25% de descuento en este producto</p>
              </TextSlide>
          </Slide>
          <Slide>
            <a href="/"><img src={img3} alt="3"></img></a>
              <TextSlide>
                <p>30% de descuento en este producto</p>
              </TextSlide>
          </Slide>
        </>
    )
}

export {Slides}