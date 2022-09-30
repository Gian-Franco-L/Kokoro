import React, { useRef, useContext, useEffect } from "react"
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
import { Modal } from "../Components/Modal/Modal"

const Layout = () =>{

  const {
    showArticles,
    setShowArticles,
    totalArticles,
    setTotalArticles,
    searchValue,
    articlesLimitCount,
    articlesCart,
    setArticlesLimitCount,
    articlesCount,
    setArticlesCount,
    filterStatus,
    setFilterStatus,
    searchedArticles,
    pageCount,
    setPageCount,
    setArticleChoice,
    openModal,
    setOpenModal,
    modalArticle
  } = useContext(AppContext)


  const tipes = useRef(null)
  const articulos = useRef(null)
  const showCart = useRef(null)

  useEffect(() => {
    let articlesAux = []

    if(searchValue.length > 1){
      for(let i=0; i<12; i++){
        if(searchedArticles[i] !== undefined){
          articlesAux.push(searchedArticles[i])
        }
      }
    }else{
      for(let i=0; i<12; i++){
        articlesAux.push(totalArticles[i])
      }
    }
    setShowArticles(articlesAux)
    setArticlesCount(12)
    setPageCount(1)
  }, [filterStatus, searchValue]);

  return(
    <>
      <Header showCart={showCart} />
      <ShoppingCart
        showCart={showCart}
        articlesCart={articlesCart}
      />
      <Carousel>
        <Slides />
      </Carousel>
      <TipeOfArticles
        tipes={tipes}
        articulos={articulos}
        setArticleChoice={setArticleChoice}
      >
        <SelectedArticles ref={articulos}>
          <ArticlesHeader 
            articulos={articulos}
            tipes={tipes}
            showCart={showCart}
            totalArticles={totalArticles}
            setTotalArticles={setTotalArticles}
            setFilterStatus={setFilterStatus}
            setArticlesCount={setArticlesCount}
          />
          <ArticlesContainer showArticles={showArticles} />
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
        pageCount={pageCount}
        setPageCount={setPageCount}
      />
      <Footer />
      {
        openModal === true
          ? <Modal setOpenModal={setOpenModal} modalArticle={modalArticle}/>
          : null
      }
      
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