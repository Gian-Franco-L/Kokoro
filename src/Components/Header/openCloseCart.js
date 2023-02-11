const openCloseCart = (
  showCart,
  cartSwitch,
  setCartSwitch,
  articlesCart,
  setArticlesCart,
  itemCartAux,
  setItemCartAux,
  onOffCartButton,
  setOnOffCartButton,
  enableDisableCollapse,
  loginRegisterSwitch,
  acountRef,
  searchRef,
  buyButton,
  status = "default"
  ) =>{
  let auxContainer = []

  if(cartSwitch === "off"){
    if(status === "default"){
      if(onOffCartButton === false){
        setOnOffCartButton(true)
        showCart.current.className = "apearCart"
        setCartSwitch("on")
        enableDisableCollapse.current.style.display = "inline"
        if(acountRef.current){
          acountRef.current.setAttribute("disabled", "")
          acountRef.current.style.opacity = "0.5"
        }
        if(searchRef.current){
          searchRef.current.setAttribute("disabled", "")
          searchRef.current.style.opacity = "0.5"
        }

        setTimeout(() =>{
          for(let i=0; i<itemCartAux.length; i++){
            setTimeout(() =>{
              auxContainer[i] = itemCartAux[i]
              setArticlesCart([...auxContainer])
            }, [((1/itemCartAux.length) * (i+1)) * 1000])
          }
        },[750])
        
        setTimeout(() => {
          setItemCartAux([])
        },[1000])
        setTimeout(() =>{
          if(buyButton.current) buyButton.current.setAttribute("disabled", "")
        }, [1100])
        setTimeout(() =>{
          setOnOffCartButton(false)
          if(buyButton.current) buyButton.current.removeAttribute("disabled")
        }, [2000])
      }
    }
  } else if(cartSwitch === "on"){
    if(onOffCartButton === false){
      let articlesToPop = articlesCart
      let cantOfArticles = articlesCart.length
      auxContainer = articlesCart.filter(item => item)
      if(buyButton.current){
        buyButton.current.setAttribute("disabled", "")
        buyButton.current.style.opacity = "0.5"
      }

      setOnOffCartButton(true)
      setCartSwitch("off")
      
      for(let i=0; i<articlesCart.length; i++){
        setTimeout(() =>{
          articlesToPop.pop()
          setArticlesCart([...articlesToPop])
        }, [((1/cantOfArticles) * (i+1)) * 1000])
      }

      if(loginRegisterSwitch === "off"){
        enableDisableCollapse.current.style.display = "none"
      }
      if(acountRef.current){
        acountRef.current.removeAttribute("disabled")
        acountRef.current.style.opacity = "1"
      }
      searchRef.current.removeAttribute("disabled")
      searchRef.current.style.opacity = "1"
      
      setTimeout(() =>{
        showCart.current.className = "desapearCart"
        setArticlesCart([])
        setItemCartAux([...auxContainer])
      }, [1000])
      setTimeout(() =>{
        setOnOffCartButton(false)
        if(status === "inLogOut"){
          setItemCartAux([])
          setArticlesCart([])
        }
      }, [2000])
    }
  }
}

export { openCloseCart }

