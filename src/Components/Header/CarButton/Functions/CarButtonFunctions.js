const openCloseCart = (
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
  status = "default"
  ) =>{
  if(cartSwitch === "off"){
    if(status === "default"){
      if(onOffCartButton === false){
        let auxContainer = []
        let discountCantAux = 0
        setDiscountCant(discountCantAux)
        setCartSwitch("on")
        setOnOffCartButton(true)
        setShopingCartStatus("on")
        setEnableDisableCollapse(true)

        setProfileLoginButtonStatusOpacityDisplay({disabled: true, opacity: "0.5", display: true})
        if(window.matchMedia("(max-width: 991px)").matches) {
          setProfileLoginButtonStatusOpacityDisplay({disabled: true, opacity: "0.5", display: false})
        }

        setSearchEnableDisable({disabled: true, opacity: "0.5", display: true})
        if (window.matchMedia("(max-width: 991px)").matches) {
          setSearchEnableDisable({disabled: false, opacity: "1", display: false})
        }

        if (window.matchMedia("(max-width: 991px)").matches) {
          setProfileLogOutDisableOrFlex("none")
        }

        setTimeout(() =>{
          for(let i=0; i<itemCartAux.length; i++){
            setTimeout(() =>{
              auxContainer[i] = itemCartAux[i]
              setArticlesCart([...auxContainer])
              if(auxContainer[i].name.split(' ')[0] === "Cuellogorro" || auxContainer[i].name.split(' ')[0] === "Botitas" || auxContainer[i].name.split(' ')[0] === "Bufanda" || auxContainer[i].name.split(' ')[0] === "Manoplas" || auxContainer[i].name.split(' ')[0] === "Babero" || auxContainer[i].name.split(' ')[0] === "Apegos" || auxContainer[i].name.split(' ')[0] === "Turbantes" || auxContainer[i].name.split(' ')[0] === "Babytas" || auxContainer[i].name.split(' ')[0] === "Gorro" || auxContainer[i].name.split(' ')[0] === "Wawita" || auxContainer[i].name.split(' ')[0] === "Batitas" || auxContainer[i].name.split(' ')[0] === "Bombachudo"){
                console.log("asd");
                discountCantAux = discountCantAux + auxContainer[i].amount
              }
              if(auxContainer[i].name.split(' ')[0] === "Pantalones" || auxContainer[i].name.split(' ')[0] === "Manta" || auxContainer[i].name.split(' ')[0] === "Alfombra" || auxContainer[i].name.split(' ')[0] === "Cambiador"){
                discountCantAux = discountCantAux + auxContainer[i].amount*2
              }
              if(auxContainer[i].name.split(' ')[0] === "Caja"){
                discountCantAux = discountCantAux + auxContainer[i].amount*3
              }
              setDiscountCant(discountCantAux)

            }, [itemCartAux.length > 5
              ? ((1/5) * (i+1)) * 300
              : itemCartAux.length !== 0
              ? ((1/itemCartAux.length) * (i+1)) * 500
              : 500
            ]
            )
          }
        },[750])

        setTimeout(() => {
          setItemCartAux([])
        },[1000])
        setTimeout(() =>{
          setBuyButtonEnableDisable({disabled: true, opacity: "1"})
        }, [1100])
        setTimeout(() =>{
          setOnOffCartButton(false)
        }, [2000])
      }
    }
  } else if(cartSwitch === "on"){
    if(onOffCartButton === false){
      let articlesToPop = articlesCart
      let cantOfArticles = articlesCart.length
      let auxContainer = articlesCart.filter(item => item)
      setBuyButtonEnableDisable({disabled: true, opacity: "0.5"})

      setOnOffCartButton(true)
      setCartSwitch("off")
      
      for(let i=0; i<articlesCart.length; i++){
        setTimeout(() =>{
          articlesToPop.pop()
          setArticlesCart([...articlesToPop])
        }, [((1/cantOfArticles) * (i+1)) * 500])
      }

      if(loginRegisterSwitch === "off"){
        setEnableDisableCollapse(false)
      }

      setProfileLoginButtonStatusOpacityDisplay({disabled: false, opacity: "1", display: true})

      if (window.matchMedia("(max-width: 991px)").matches) {
        setProfileLogOutDisableOrFlex("flex")

      }

      setSearchEnableDisable({disabled: false, opacity: "1", display: true})
      if (window.matchMedia("(max-width: 991px)").matches) {
        setSearchEnableDisable({disabled: false, opacity: "1", display: true})
      }

      setTimeout(() =>{
        setShopingCartStatus("off")
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

