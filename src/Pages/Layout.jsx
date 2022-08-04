import React from "react"
import { Header } from "../Containers/Header/Header"
import { Carousel } from "../Containers/Carousel/Carousel"
import { Slides } from "../Components/Slides/Slides"
import { Articles } from "../Containers/Articles/Articles"
import { Footer } from "../Containers/Footer/Footer"

const Layout = () =>{
  return(
    <>
      <nav>
        <Header/>
      </nav>
      <main>
        <section>
          <Carousel>
            <Slides />
          </Carousel>
        </section>
        <section>
          <Articles />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

export { Layout }