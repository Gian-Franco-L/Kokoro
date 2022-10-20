import React from "react"
import fondo from "../../img/fondo.jpeg"
import artuno from "../../img/artuno.jpeg"
import artdos from "../../img/artdos.jpeg"
import arttres from "../../img/arttres.jpeg"
import { Slide, TextSlide } from "../Carousel/Carousel"

const Slides = () =>{
    return(
        <>
          <Slide>
          <a href="/"><img src={fondo} alt="0" /></a>
            <TextSlide>
                <p>10% de descuento en este producto</p>
            </TextSlide>
          </Slide>
          <Slide>
            <a href="/"><img src={artuno} alt="1" /></a>
              <TextSlide>
                <p>15% de descuento en este producto</p>
              </TextSlide>
          </Slide>
          <Slide>
            <a href="/"><img src={artdos} alt="2" /></a>
              <TextSlide>
                <p>25% de descuento en este producto</p>
              </TextSlide>
          </Slide>
          <Slide>
            <a href="/"><img src={arttres} alt="3" /></a>
              <TextSlide>
                <p>30% de descuento en este producto</p>
              </TextSlide>
          </Slide>
        </>
    )
}

export {Slides}