const addToCart = (
  payload,
  itemsPrice,
  img,
  articlesCart,
  setArticlesCart,
  cartSwitch,
  itemCartAux,
  setItemCartAux,
  setItemToDataBase,
  discountCant,
  setDiscountCant,
  cuelloGorroSizeChoice
) =>{
  let articleAmount
  let whereToPlaceArticle
  let pantalonPrice

  if(cartSwitch === "on"){
    whereToPlaceArticle = articlesCart
    articleAmount = articlesCart
  }else{
    whereToPlaceArticle = itemCartAux
    articleAmount = itemCartAux
  }

  if(whereToPlaceArticle.filter(item => item.name === payload && item.cuelloGorroSizeChoice === cuelloGorroSizeChoice).length === 0){
    if(itemsPrice === 140015001600){
      if(cuelloGorroSizeChoice === "T2") pantalonPrice = 1400
      if(cuelloGorroSizeChoice === "T4") pantalonPrice = 1500
      if(cuelloGorroSizeChoice === "T6") pantalonPrice = 1600
    }
    whereToPlaceArticle === articlesCart
      ? setArticlesCart([...whereToPlaceArticle, {name: payload, amount: 1, price: pantalonPrice ? pantalonPrice : itemsPrice, img: img, cuelloGorroSizeChoice: cuelloGorroSizeChoice}])
      : setItemCartAux([...whereToPlaceArticle, {name: payload, amount: 1, price: pantalonPrice ? pantalonPrice : itemsPrice, img: img, cuelloGorroSizeChoice: cuelloGorroSizeChoice}])
    setItemToDataBase([...whereToPlaceArticle, {name: payload, amount: 1, price: pantalonPrice ? pantalonPrice : itemsPrice, img: img, cuelloGorroSizeChoice: cuelloGorroSizeChoice}])
  }else{
    for(let i=0; i<whereToPlaceArticle.length; i++){
      if(whereToPlaceArticle[i].name === payload && whereToPlaceArticle[i].cuelloGorroSizeChoice === cuelloGorroSizeChoice){
        articleAmount[i].amount++
        if(itemsPrice === 140015001600){
          if(cuelloGorroSizeChoice === "T2") articleAmount[i].price = 1400
          if(cuelloGorroSizeChoice === "T4") articleAmount[i].price = 1500
          if(cuelloGorroSizeChoice === "T6") articleAmount[i].price = 1600
        }else{
          articleAmount[i].price = itemsPrice
        }
        if(whereToPlaceArticle === articlesCart){
          setArticlesCart([...articlesCart])
          setItemToDataBase([...articlesCart])
        }else{
          setItemCartAux([...itemCartAux])
          setItemToDataBase([...itemCartAux])
        }
      }
    }
  }
  if(payload.split(' ')[0] === "Cuellogorro" || payload.split(' ')[0] === "Botitas" || payload.split(' ')[0] === "Bufanda" || payload.split(' ')[0] === "Manoplas" || payload.split(' ')[0] === "Babero" || payload.split(' ')[0] === "Apegos" || payload.split(' ')[0] === "Turbantes" || payload.split(' ')[0] === "Babytas" || payload.split(' ')[0] === "Gorro" || payload.split(' ')[0] === "Wawita" || payload.split(' ')[0] === "Batitas" || payload.split(' ')[0] === "Bombachudo"){
    const cantAux = discountCant + 1
    setDiscountCant(cantAux)
  }
  if(payload.split(' ')[0] === "Pantalones" || payload.split(' ')[0] === "Manta" || payload.split(' ')[0] === "Alfombra" || payload.split(' ')[0] === "Cambiador"){
    const cantAux = discountCant + 2
    setDiscountCant(cantAux)
  }
  if(payload.split(' ')[0] === "Caja"){
    const cantAux = discountCant + 3
    setDiscountCant(cantAux)
  }
}

const changeModalState = (
  body,
  setCuelloGorroSizes,
  setOpenArticlesModal,
  setCantAdded,
  setCuelloGorroSizeChoice,
  setSizeApearContainerStatus,
  setPlusStatus
) =>{
  setCuelloGorroSizes([])
  setOpenArticlesModal(false)
  body.style.overflowY = 'inherit'
  setCantAdded(0)
  setCuelloGorroSizeChoice('?')
  setSizeApearContainerStatus({cuello: "off", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "none"})
  setPlusStatus("off")
}

const wrapperFunction = (
  modalArticle,
  addPlusAnimation,
  setPlusStatus,
  cantAdded,
  setCantAdded,
  payload,
  price,
  img,
  articlesCart,
  setArticlesCart,
  cartSwitch,
  itemCartAux,
  setItemCartAux,
  setItemToDataBase,
  discountCant,
  setDiscountCant,
  cuelloGorroSizeChoice,
  addToCart,
  noChoice,
  setSizeChoiceButtonDisplay,
  cuelloGorroSizes,
  setSizeApearContainerStatus,
  setCuelloGorroSizes,
  setSizeAlert
  ) =>{
    if((modalArticle.item.split(' ')[0] !== 'Cuellogorro' && modalArticle.item.split(' ')[0] !== 'Botitas' && modalArticle.item.split(' ')[0] !== 'Pantalon' && modalArticle.item.split(' ')[0] !== 'Batitas' && modalArticle.item.split(' ')[0] !== 'Bombachudo' && modalArticle.item.split(' ')[0] !== 'Gorro')  || modalArticle.item.split(' ')[1] === 'mix' || modalArticle.item.split(' ')[modalArticle.item.split(' ').length -1] === 'mix'){
      addToCart(
        payload,
        price,
        img,
        articlesCart,
        setArticlesCart,
        cartSwitch,
        itemCartAux,
        setItemCartAux,
        setItemToDataBase,
        discountCant,
        setDiscountCant,
        cuelloGorroSizeChoice)
      addPlusAnimation(cantAdded, setCantAdded, setPlusStatus)
    }else if(cuelloGorroSizeChoice !== '?'){
      addToCart(
        payload,
        price,
        img,
        articlesCart,
        setArticlesCart,
        cartSwitch,
        itemCartAux,
        setItemCartAux,
        setItemToDataBase,
        discountCant,
        setDiscountCant,
        cuelloGorroSizeChoice)
      addPlusAnimation(cantAdded, setCantAdded, setPlusStatus)
    }else{
      noChoice(setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes, setSizeAlert)
    }
}

const addPlusAnimation = (cantAdded, setCantAdded, setPlusStatus) =>{
  const cantAddedAux = cantAdded +1
  const plusCounter = document.getElementById("plus")

  setCantAdded(cantAddedAux)
  setPlusStatus((prevState) => prevState === "off")
  setTimeout(() =>{
    setPlusStatus("on")
  }, [10])
  setTimeout(() =>{
    if(Number(plusCounter.innerHTML.split('+')[1]) === cantAddedAux) setCantAdded(0)
  }, [2000])
}

const altRegisterLogin = (election, setOpenArticlesModal, setOpenLoginModal, setLoginRegisterElection) =>{
  setOpenArticlesModal(false)
  setOpenLoginModal(true)
  setLoginRegisterElection(election)
}

const apearGlobalImg = (setGlobalImagenDisplay, setCloseGlobalImage) =>{
  if(window.matchMedia('(max-width: 991px)').matches) {
    setGlobalImagenDisplay('inline-block')
    setCloseGlobalImage('inline-block')
  }
}

const disappearGlobalImg = (setGlobalImagenDisplay, setCloseGlobalImage) =>{
  setGlobalImagenDisplay('none')
  setCloseGlobalImage('none')
}

const openCloseSizeChoice = (setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes) =>{
  let sizeArray
  let sizeAux = []
  let count

  setSizeChoiceButtonDisplay(false)
  setTimeout(() =>{
    setSizeChoiceButtonDisplay(true)
  }, [1500])

  if(cuelloGorroSizes.length === 0){
    if(modalArticle.item.split(' ')[0] === 'Cuellogorro' && modalArticle.item.split(' ')[1] !== 'mix'){
      sizeArray = ['T1', 'T2', '']
      count = 3
      setSizeApearContainerStatus({cuello: "on", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Botitas' && modalArticle.item.split(' ')[modalArticle.item.split(' ').length -1] !== 'mix'){
      sizeArray = ['17', '18', '19', '20', '21', '22', '']
      count = 7
      setSizeApearContainerStatus({cuello: "none", botitas: "on", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Pantalon'){
      sizeArray = ['T2', 'T4', 'T6', '']
      count = 4
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "on", batitas: "none", bombachudo: "none", gorro: "none"})
    } else if(modalArticle.item.split(' ')[0] === 'Batitas'){
      sizeArray = ['1', '2', '3', '']
      count = 4
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "on", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Bombachudo'){
      sizeArray = ['0', '1', '']
      count = 3
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "on"})
    }else if(modalArticle.item.split(' ')[0] === 'Gorro'){
      sizeArray = ['0', '1', '']
      count = 3
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "on"})
    }
    
    for(let i=0; i<count; i++){
      setTimeout(() =>{
        sizeAux[i] = sizeArray[i]
        setCuelloGorroSizes([...sizeAux])
      }, [((1/5) * (i+1)) * 1000]
      )
    }
  }else{
    if(modalArticle.item.split(' ')[0] === 'Cuellogorro' && modalArticle.item.split(' ')[1] !== 'mix'){
      sizeAux = ['T1', 'T2', '']
      count = 3
      setSizeApearContainerStatus({cuello: "off", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Botitas' && modalArticle.item.split(' ')[modalArticle.item.split(' ').length -1] !== 'mix'){
      sizeAux = ['17', '18', '19', '20', '21', '22', '']
      count = 7
      setSizeApearContainerStatus({cuello: "none", botitas: "off", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "none"})
    } else if(modalArticle.item.split(' ')[0] === 'Pantalon'){
      sizeAux = ['T2', 'T4', 'T6', '']
      count = 4
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "off", batitas: "none", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Batitas'){
      sizeAux = ['1', '2', '3', '']
      count = 4
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "off", bombachudo: "none", gorro: "none"})
    }else if(modalArticle.item.split(' ')[0] === 'Bombachudo'){
      sizeAux = ['0', '1', '']
      count = 3
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "off", gorro: "none"})
    }
    else if(modalArticle.item.split(' ')[0] === 'Gorro'){
      sizeAux = ['0', '1', '']
      count = 3
      setSizeApearContainerStatus({cuello: "none", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none", gorro: "off"})
    }
    for(let i=0; i<count; i++){
      setTimeout(() =>{
        sizeAux.pop()
        setCuelloGorroSizes([...sizeAux])
      }, [((1/5) * (i+1)) * 1000]
      )
    }
  }
}

const selectedChoice = (item, setCuelloGorroSizeChoice, openCloseSizeChoice, setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes) =>{
  if(item !== '?'){
    setCuelloGorroSizeChoice(item)
    openCloseSizeChoice(setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes)
  }
}

const noChoice = (setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes, setSizeAlert) =>{
  if(cuelloGorroSizes.length === 0){
    openCloseSizeChoice(setSizeChoiceButtonDisplay, cuelloGorroSizes, modalArticle, setSizeApearContainerStatus, setCuelloGorroSizes)
  }else{
    setSizeAlert("on")
    setTimeout(() =>{
      setSizeAlert("off")
    }, [1500])
  }
}

export { addToCart, changeModalState, altRegisterLogin, wrapperFunction, addPlusAnimation, apearGlobalImg, disappearGlobalImg, openCloseSizeChoice, selectedChoice, noChoice }