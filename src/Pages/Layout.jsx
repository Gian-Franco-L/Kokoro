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
    articleChoice,
    setArticleChoice,
    openModal,
    setOpenModal,
    modalArticle,
    itemCartAux,
    setItemCartAux,
    cartFilledOrNot,
    setCartFilledOrNot
  } = useContext(AppContext)


  const tipes = useRef(null)
  const articulos = useRef(null)
  const showCart = useRef(null)

  useEffect(() => {
    let articlesAux = []

    for(let i=0; i<12; i++){
      articlesAux.push(totalArticles[i])
    }

    setShowArticles(articlesAux)
    setArticlesCount(12)
    setPageCount(1)
  }, [filterStatus, searchedArticles]);

  return(
    <LayoutContainer>
      <Header
        showCart={showCart}
        searchedArticles={searchedArticles}
      />
      <ShoppingCart
        showCart={showCart}
        articlesCart={articlesCart}
        itemCartAux={itemCartAux}
        setItemCartAux={setItemCartAux}
        cartFilledOrNot={cartFilledOrNot}
        setCartFilledOrNot={setCartFilledOrNot}
      />
      <Carousel>
        <Slides />
      </Carousel>
      <TipeOfArticles
        tipes={tipes}
        articulos={articulos}
        articleChoice={articleChoice}
        setArticleChoice={setArticleChoice}
      />
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
        <div>
          <ArticlesContainer
            showArticles={showArticles}
            articleChoice={articleChoice}
            articulos={articulos}
            tipes={tipes}
          />
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
        </div>
      </SelectedArticles>
      <Footer />
      {openModal === true
          ? <Modal
              setOpenModal={setOpenModal}
              modalArticle={modalArticle}
            />
          : null}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  position: relative;
`
const SelectedArticles = styled.div`
  display: none;
  margin-top: 4%;
`
export { Layout }


// .filter(item =>{
//   if(articleChoice<=3){
//     return item.id<=5
//   }else{
//     return item.id>5
//   }
// })