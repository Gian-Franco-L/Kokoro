import React, { useRef, useContext } from "react"
import styled, { keyframes, css } from "styled-components"
import { AppContext } from "../Context/AppContext"
import { HeaderBootstrap } from "../Components/Header/HeaderBootstrap"
import { Carousel } from "../Components/Carousel/Carousel"
import { Slides } from "../Components/Carousel/Slides/Slides"
import { GoogleMaps } from "../Components/GoogleMaps/GoogleMaps"
import { Info } from "../Components/Info/Info"
import { Footer } from "../Components/Footer/Footer"
import { ArticlesContainer } from "../Components/ArticlesContainer/ArticlesContainer"
import { MoreItemsButton } from "../Components/MoreItemsButton/MoreItemsButton"
import { ShoppingCart } from "../Components/ShoppingCart/ShoppingCart"
import { ArticlesModal } from "../Components/ArticlesModal/ArticlesModal"
import { LoginModal } from "../Components/LoginModal/LoginModal"
import { SearchedContainer } from "../Components/SearchedContainer/SearchedContainer"
import { LoginRegister } from "../Components/LoginRegister/LoginRegister"
import { PurchaseModal } from "../Components/PurchaseModal/PurchaseModal"
import { DiscountModal } from "../Components/DiscountModal/DiscountModal"
import { FilterModal } from "../Components/FilterModal/FilterModal"
import { useUpdateLocalStorage } from "../Hooks/useUpdateLocalStorage"
import { useItemToDatabase } from "../Hooks/useItemToDatabase"
import { useGetItems } from "../Hooks/useGetItems"
import { useGetAllArticles } from "../Hooks/useGetAllArticles"

const Layout = () =>{
  const {
    openArticlesModal,
    openLoginModal,
    openPurchaseModal,
    onOffDiscountModal,
    onOffFilterModal,
    selectedArticlesAnimationStatus
  } = useContext(AppContext)

  const backNextToTop = useRef(null)
  const intervalCarousel = useRef(null)

  useUpdateLocalStorage()
  useItemToDatabase()
  useGetItems()
  useGetAllArticles()

  // useEffect(() => {
  //   if(totalHomeArticles.length !== 0){
  //     let articlesAux = []
  //     for(let i=0; i<15; i++){
  //       articlesAux.push(totalHomeArticles[i])
  //     }
  //     setShowArticles(articlesAux)
  //   }
  // }, [filterStatus])

  return(
    <LayoutContainer>
      <HeaderBootstrap />
      <SearchedContainer />
      <LoginRegister />
      <ShoppingCart />
      <Carousel intervalCarousel={intervalCarousel}>
        <Slides />
      </Carousel>
      <SelectedArticles selectedArticles={selectedArticlesAnimationStatus}>
        <div>
          <ArticlesContainer
            backNextToTop={backNextToTop}
          />
          <MoreItemsButton backNextToTop={backNextToTop} />
        </div>
      </SelectedArticles>
      <GoogleMaps />
      <Info />
      <Footer />
      {onOffFilterModal === "on" &&
        <FilterModal />
      }
      {onOffDiscountModal === "on" &&
        <DiscountModal />
      }
      {openArticlesModal === true &&
        <ArticlesModal />
      }
      {openLoginModal === true &&
        <LoginModal />
      }
      {openPurchaseModal === true &&
        <PurchaseModal />
      }
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  position: relative;
  background-color: #ebe9eb;
`
const SelectedArticles = styled.div`
  margin-top: 5%;
`

export { Layout }