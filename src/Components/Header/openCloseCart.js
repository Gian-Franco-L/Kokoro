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
  searchRef
  ) =>{
  let auxContainer = []

  if(cartSwitch === "off"){
    if(onOffCartButton === false){
      setOnOffCartButton(true)
      showCart.current.className = "apearCart"
      setCartSwitch("on")
      enableDisableCollapse.current.style.display = "inline"
      if(acountRef.current){
        acountRef.current.setAttribute("disabled", "");
        acountRef.current.style.opacity = "0.5"
      }
      searchRef.current.setAttribute("disabled", "");
      searchRef.current.style.opacity = "0.5"

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
        setOnOffCartButton(false)
      }, [2000])
    }
  } else if(cartSwitch === "on"){
    if(onOffCartButton === false){

      let articlesToPop = articlesCart
      let cantOfArticles = articlesCart.length
      auxContainer = articlesCart.filter(item => item)

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
        acountRef.current.removeAttribute("disabled");
        acountRef.current.style.opacity = "1"
      }
      searchRef.current.removeAttribute("disabled");
      searchRef.current.style.opacity = "1"
      
      setTimeout(() =>{
        showCart.current.className = "desapearCart"
        setArticlesCart([])
        setItemCartAux([...auxContainer])
      }, [1000])
      setTimeout(() =>{
        setOnOffCartButton(false)
      }, [2000])
    }
  }
}

export { openCloseCart }

