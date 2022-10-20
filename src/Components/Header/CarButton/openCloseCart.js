const openCloseCart = (
  showCart,
  cartSwitch,
  setCartSwitch,
  articlesCart,
  setArticlesCart,
  itemCartAux,
  setItemCartAux,
  setOnOffCarButton
  ) =>{

  let auxContainer = []

  if(cartSwitch === "off"){
    setOnOffCarButton(true)
    showCart.current.className = "apearCart"
    setCartSwitch("on")

    setTimeout(() =>{
      for(let i=0; i<itemCartAux.length; i++){
        setTimeout(() =>{
          auxContainer[i] = itemCartAux[i]
          setArticlesCart([...auxContainer])
        }, [((1/itemCartAux.length) * (i+1)) * 1000])
      }
    },[750])

    setTimeout(() => {
      setOnOffCarButton(false)
      setItemCartAux([])
    },[1000])
    
  } else if(cartSwitch === "on"){
    let articlesToPop = articlesCart
    let cantOfArticles = articlesCart.length
    auxContainer = articlesCart.filter(item => item)

    setOnOffCarButton(true)
    setCartSwitch("off")

    for(let i=0; i<articlesCart.length; i++){
      setTimeout(() =>{
        articlesToPop.pop()
        setArticlesCart([...articlesToPop])
      }, [((1/cantOfArticles) * (i+1)) * 1000])
    }

    setTimeout(() =>{
      showCart.current.className = "desapearCart"
      setArticlesCart([])
      setItemCartAux([...auxContainer])
      setOnOffCarButton(false)
    }, [1000])
  }
}

export { openCloseCart }

