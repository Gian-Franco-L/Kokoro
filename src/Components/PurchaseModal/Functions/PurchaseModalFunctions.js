const finishPurchase = async(
  articlesCart,
  totalCount,
  discountCant,
  email,
  body,
  purchaseService,
  token,
  openCloseCart,
  setShopingCartStatus,
  cartSwitch,
  setCartSwitch,
  setArticlesCart,
  itemCartAux,
  setItemCartAux,
  onOffCartButton,
  setOnOffCartButton,
  setEnableDisableCollapse,
  loginRegisterSwitch,
  setProfileLoginButtonStatusOpacityDisplay,
  setSearchEnableDisable,
  setBuyButtonEnableDisable,
  setProfileLogOutDisableOrFlex,
  setDiscountCant,
  setItemToDataBase,
  setCartFilledOrNot,
  setWppLink
  ) =>{

    const purchase = {
      info: articlesCart.map(item => item),
      total: totalCount(articlesCart, discountCant),
      email: email
    }

    body.style.overflowY = "inherit"
    await purchaseService.createPurchase(purchase, {token})

    openCloseCart(
      setShopingCartStatus,
      cartSwitch,
      setCartSwitch,
      articlesCart,
      setArticlesCart,
      itemCartAux,
      setItemCartAux,
      onOffCartButton,
      setOnOffCartButton,
      setEnableDisableCollapse,
      loginRegisterSwitch,
      setProfileLoginButtonStatusOpacityDisplay,
      setSearchEnableDisable,
      setBuyButtonEnableDisable,
      setProfileLogOutDisableOrFlex,
      setDiscountCant
    )

    setTimeout(() =>{
      setItemCartAux([])
      setArticlesCart([])
      setItemToDataBase([])
      setCartFilledOrNot(false)
      setWppLink("https://wa.me/541562965524?text=Hola%20mi%20nombre%20es")
    }, 2000)
}

const closeModalButton = (body, setOpenPurchaseModal, setWppLink) =>{
  body.style.overflowY = "inherit"
  setOpenPurchaseModal(false)
  setWppLink("https://wa.me/541562965524?text=Hola%20mi%20nombre%20es")
}

export { finishPurchase, closeModalButton }