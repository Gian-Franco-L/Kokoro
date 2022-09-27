import React, { useState, useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { AppContext } from "../Context/AppContext"
import { Header } from "../Components/Header/Header"
import { Carousel } from "../Components/Carousel/Carousel"
import { Slides } from "../Components/Slides/Slides"
import { TipeOfArticles } from "../Components/TipeOfArticles/TipeOfArticles"
import { Footer } from "../Components/Footer/Footer"
import { ArticlesHeader } from "../Components/ArticlesHeader/ArticlesHeader"
import { ArticlesContainer } from "../Components/ArticlesContainer/ArticlesContainer"
import { MoreItemsButton } from "../Components/MoreItemsButton/MoreItemsButton"
import { ShoppingCart } from "../Components/ShoppingCart/ShoppingCart"

const Layout = () =>{

  const {
    showArticles,
    setShowArticles,
    totalArticles,
    setTotalArticles,
    searchValue,
    articleChoice,
    articlesLimitCount,
    setArticlesLimitCount,
    articlesCount,
    setArticlesCount
  } = useContext(AppContext)


  const tipes = useRef(null)
  const articulos = useRef(null)
  const showCart = useRef(null)

  useEffect(() => {
    console.log("asd");
  }, [totalArticles]);

  // if(searchValue.length < 1){
  //   filterItems = showArticles
  // }else{
  //   filterItems = totalArticles.filter(value =>{
  //     const todoText = value.Name.toLowerCase()
  //     const searchText = searchValue.toLowerCase()
  //     return todoText.includes(searchText)
  //   })
  // }

  return(
    <>
      <Header showCart={showCart} />
      <ShoppingCart showCart={showCart} />
      <Carousel>
        <Slides />
      </Carousel>
      <TipeOfArticles
        tipes={tipes}
        articulos={articulos}
      >
        <SelectedArticles ref={articulos}>
          <ArticlesHeader 
            articulos={articulos}
            tipes={tipes}
            showCart={showCart}
            totalArticles={totalArticles}
            setTotalArticles={setTotalArticles}
          />
          <ArticlesContainer 
            showArticles={showArticles}
          />
        </SelectedArticles>
      </TipeOfArticles>
      <MoreItemsButton 
        showArticles={showArticles}
        setShowArticles={setShowArticles}
        articlesLimitCount={articlesLimitCount}
        setArticlesLimitCount={setArticlesLimitCount}
        articlesCount={articlesCount}
        setArticlesCount={setArticlesCount}
        totalArticles={totalArticles}
      />
      <Footer />
    </>
  )
}

const SelectedArticles = styled.div`
  display: none;
`

export { Layout }


// .filter(item =>{
//   if(articleChoice<=3){
//     return item.id<=5
//   }else{
//     return item.id>5
//   }
// })