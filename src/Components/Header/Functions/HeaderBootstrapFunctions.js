const openCloseLoginRegister = (
  loginRegisterSwitch,
  setLoginRegisterSwitch,
  setLoginregisterStatus,
  setEnableDisableCollapse,
  cartSwitch,
  setCartButtonEnableDisable,
  setSearchEnableDisable
  ) =>{
  if(loginRegisterSwitch === "off"){
    setLoginRegisterSwitch("on")
    setLoginregisterStatus("on")
    setEnableDisableCollapse(true)
    setCartButtonEnableDisable({disabled: true, opacity: "0.5", display: true})
    setSearchEnableDisable({disabled: true, opacity: "0.5", display: true})
  }
  if(loginRegisterSwitch === "on"){
    setLoginRegisterSwitch("off")
    setLoginregisterStatus("off")
    if(cartSwitch === "off") setEnableDisableCollapse(false)
    setCartButtonEnableDisable({disabled: false, opacity: "1", display: true})
    setSearchEnableDisable({disabled: false, opacity: "1", display: true})
  }
}

const closeCartOnProfile = (
  articlesCart,
  setOnOffCartButton,
  setCartSwitch,
  setArticlesCart,
  setShopingCartStatus
) =>{
  let articlesToPop = articlesCart
  let cantOfArticles = articlesCart.length
  setOnOffCartButton(false)
  setCartSwitch("off")
  setShopingCartStatus("off")
  
  for(let i=0; i<cantOfArticles; i++){
    setTimeout(() =>{
      articlesToPop.pop()
      setArticlesCart([...articlesToPop])
    }, [((1/cantOfArticles) * (i+1)) * 1000])
  }
}

const handleLoginOut = (
  setUserName,
  setPassword,
  setPasswordAgain,
  setName,
  setEmail,
  setPhone,
  setEmails,
  setLogUser,
  setToken,
  setAccess,
  setLogPassword,
  openCloseCart,
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
  ) =>{
  let status = "inLogOut"
  setUserName(null)
  setPassword(null)
  setPasswordAgain(null)
  setName(null)
  setEmail(null)
  setPhone(null)
  setEmails(null)
  setLogUser(null)
  setToken(null)
  setAccess(null)
  setLogPassword(null)

  window.localStorage.removeItem('loggedUser')
  
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
    setDiscountCant,
    status
  )
}

export { openCloseLoginRegister, closeCartOnProfile, handleLoginOut }