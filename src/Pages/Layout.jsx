import React from "react"
import { Header } from "../Containers/Header"
import { Carousel } from "../Containers/Carousel"
import { Slides } from "../Components/Slides"
import { Articles } from "../Containers/Articles"

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
      </main>
    </>
  )
}

export { Layout }