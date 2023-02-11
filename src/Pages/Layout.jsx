import React, { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { AppContext } from "../Context/AppContext"
import { HeaderBootstrap } from "../Components/Header/HeaderBootstrap"
import { Carousel } from "../Components/Carousel/Carousel"
import { Slides } from "../Components/Carousel/Slides/Slides"
import { TipeOfArticles } from "../Components/TipeOfArticles/TipeOfArticles"
import { Footer } from "../Components/Footer/Footer"
import { ArticlesContainer } from "../Components/ArticlesContainer/ArticlesContainer"
import { MoreItemsButton } from "../Components/MoreItemsButton/MoreItemsButton"
import { ShoppingCart } from "../Components/ShoppingCart/ShoppingCart"
import { ArticlesModal } from "../Components/ArticlesModal/ArticlesModal"
import { LoginModal } from "../Components/LoginModal/LoginModal"
import { SearchedContainer } from "../Components/SearchedContainer/SearchedContainer"
import { LoginRegister } from "../Components/LoginRegister/LoginRegister"
import { PurchaseModal } from "../Components/PurchaseModal/PurchaseModal"
import productService from "../Services/product"
import userService from "../Services/user"
import white from "../img/bgwhite1.jpg"

const Layout = () =>{
  const {
    showArticles,
    setShowArticles,
    totalArticles,
    setTotalArticles,
    articlesLimitCount,
    articlesCart,
    setArticlesCart,
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
    openArticlesModal,
    setOpenArticlesModal,
    openLoginModal,
    setOpenLoginModal,
    modalArticle,
    itemCartAux,
    setItemCartAux,
    itemToDataBase,
    setItemToDataBase,
    cartFilledOrNot,
    setCartFilledOrNot,
    cartSwitch,
    setCartSwitch,
    userName,
    setUserName,
    password,
    setPassword,
    passwordAgain,
    setPasswordAgain,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    emails,
    setEmails,
    logUser,
    setLogUser,
    token,
    setToken,
    access,
    setAccess,
    logPassword,
    setLogPassword,
    onOffCartButton,
    setOnOffCartButton,
    loginRegisterElection,
    setLoginRegisterElection,
    loginRegisterSwitch,
    setLoginRegisterSwitch,
    openPurchaseModal,
    setOpenPurchaseModal,
    allUsers,
    setAllUsers,
    modalScroll,
    setModalScroll,
    wppLink,
    setWppLink
  } = useContext(AppContext)

  const tipes = useRef(null)
  const articulos = useRef(null)
  const showCart = useRef(null)
  const loginRegisterRef = useRef(null)
  const enableDisableCollapse = useRef(null)
  const acountRef = useRef(null)
  const cartButtonRef = useRef(null)
  const searchRef = useRef(null)
  const buyButton = useRef(null)

  useEffect(() =>{
    let articlesAux = []
    productService.getAll()
      .then((res) => {
        setTotalArticles(res)
          for(let i=0; i<15; i++){
            articlesAux.push(res[i])
          }
          setShowArticles(articlesAux)
        })
  }, [])

  useEffect(() => {
    if(totalArticles.length !== 0){
      let articlesAux = []
      for(let i=0; i<15; i++){
        articlesAux.push(totalArticles[i])
      }
      setShowArticles(articlesAux)
    }
  }, [filterStatus])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      setUserName(JSON.parse(loggedUserJSON).userName)
      setName(JSON.parse(loggedUserJSON).name)
      setEmail(JSON.parse(loggedUserJSON).email)
      setPhone(JSON.parse(loggedUserJSON).phone)
      setToken(JSON.parse(loggedUserJSON).token)
      setAccess(JSON.parse(loggedUserJSON).access)
      userService.getAllUsers().then(res => {
        const user = res.filter(item => item.userName === userName)
        if(!!user.length){
          const cartItems = user[0].cartItems
          setItemToDataBase(cartItems)
          setItemCartAux(cartItems)
        }
        
      })
    }
    setArticlesCount(15)
    setPageCount(1)
  }, [filterStatus, searchedArticles, userName]);

  useEffect(() =>{
    
    if(itemToDataBase !== null && userName){
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      const userJsonName = JSON.parse(loggedUserJSON).userName
      userService.updateUser({
        userName: userJsonName,
        cartItems: itemToDataBase
      })
    }
  }, [itemToDataBase])

  return(
    <LayoutContainer white={white}>
      <HeaderBootstrap
        showCart={showCart}
        searchedArticles={searchedArticles}
        openArticlesModal={openArticlesModal}
        cartSwitch={cartSwitch}
        setCartSwitch={setCartSwitch}
        articlesCart={articlesCart}
        setArticlesCart={setArticlesCart}
        itemCartAux={itemCartAux}
        setItemCartAux={setItemCartAux}
        onOffCartButton={onOffCartButton}
        setOnOffCartButton={setOnOffCartButton}
        setCartFilledOrNot={setCartFilledOrNot}
        userName={userName}
        setUserName={setUserName}
        access={access}
        setOpenLoginModal={setOpenLoginModal}
        loginRegisterSwitch={loginRegisterSwitch}
        setLoginRegisterSwitch={setLoginRegisterSwitch}
        loginRegisterRef={loginRegisterRef}
        enableDisableCollapse={enableDisableCollapse}
        acountRef={acountRef}
        cartButtonRef={cartButtonRef}
        searchRef={searchRef}
        buyButton={buyButton}
      />
      <SearchedContainer 
        searchedArticles={searchedArticles}
        openLoginModal={openLoginModal}
        enableDisableCollapse={enableDisableCollapse}
        acountRef={acountRef}
        cartButtonRef={cartButtonRef}
      />
      <LoginRegister
        setOpenLoginModal={setOpenLoginModal}
        setLoginRegisterElection={setLoginRegisterElection}
        loginRegisterSwitch={loginRegisterSwitch}
        setLoginRegisterSwitch={setLoginRegisterSwitch}
        loginRegisterRef={loginRegisterRef}
        cartButtonRef={cartButtonRef}
        searchRef={searchRef}
        enableDisableCollapse={enableDisableCollapse}
        setModalScroll={setModalScroll}
      />
      <ShoppingCart
        showCart={showCart}
        articlesCart={articlesCart}
        itemCartAux={itemCartAux}
        setItemCartAux={setItemCartAux}
        cartFilledOrNot={cartFilledOrNot}
        setCartFilledOrNot={setCartFilledOrNot}
        token={token}
        userName={userName}
        acountRef={acountRef}
        setOpenPurchaseModal={setOpenPurchaseModal}
        buyButton={buyButton}
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
      {openArticlesModal === true &&
        <ArticlesModal
          setOpenArticlesModal={setOpenArticlesModal}
          modalArticle={modalArticle}
          articlesCart={articlesCart}
          setArticlesCart={setArticlesCart}
          setItemToDataBase={setItemToDataBase}
          cartSwitch={cartSwitch}
          itemCartAux={itemCartAux}
          setItemCartAux={setItemCartAux}
          cartFilledOrNot={cartFilledOrNot}
          userName={userName}
          setOpenLoginModal={setOpenLoginModal}
          setLoginRegisterElection={setLoginRegisterElection}
        />
      }
      {openLoginModal === true &&
        <LoginModal
          setOpenLoginModal={setOpenLoginModal}
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          passwordAgain={passwordAgain}
          setPasswordAgain={setPasswordAgain}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          emails={emails}
          setEmails={setEmails}
          logUser={logUser}
          setLogUser={setLogUser}
          logPassword={logPassword}
          setLogPassword={setLogPassword}
          setToken={setToken}
          loginRegisterElection={loginRegisterElection}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          modalScroll={modalScroll}
        />
      }
      {openPurchaseModal === true &&
        <PurchaseModal 
          setOpenPurchaseModal={setOpenPurchaseModal}
          name={name}
          email={email}
          articlesCart={articlesCart}
          wppLink={wppLink}
          setWppLink={setWppLink}
          token={token}
          setItemCartAux={setItemCartAux}
          setArticlesCart={setArticlesCart}
          setItemToDataBase={setItemToDataBase}
        />
      }
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  position: relative;
  background-color: #ebe9eb;
  /* background-image: url(${props => props.white});
  background-repeat: no-repeat;
  background-size: cover; */
`
const SelectedArticles = styled.div`
  display: flex;
  margin-top: 5%;
`
export { Layout }