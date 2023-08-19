export default async function outOfCart(payload, articlesCart, setArticlesCart, setItemToDataBase, discountCant, setDiscountCant, cuelloGorroSizeChoice){
  if(articlesCart.filter(item => item.name === payload && item.cuelloGorroSizeChoice === cuelloGorroSizeChoice)[0].amount === 1){
    const outItem = articlesCart.filter(item => item.name === payload && item.cuelloGorroSizeChoice === cuelloGorroSizeChoice)
    const outArticle = articlesCart.filter(item => item !== outItem[0])
    setArticlesCart(outArticle)
    setItemToDataBase(outArticle)
    if(outItem[0].name.split(' ')[0] === "Cuellogorro" || outItem[0].name.split(' ')[0] === "Botitas" || outItem[0].name.split(' ')[0] === "Bufanda" || outItem[0].name.split(' ')[0] === "Manoplas" || outItem[0].name.split(' ')[0] === "Babero" || outItem[0].name.split(' ')[0] === "Apegos" || outItem[0].name.split(' ')[0] === "Turbantes" || outItem[0].name.split(' ')[0] === "Babytas" || outItem[0].name.split(' ')[0] === "Gorro" || outItem[0].name.split(' ')[0] === "Wawita" || outItem[0].name.split(' ')[0] === "Batitas" || outItem[0].name.split(' ')[0] === "Bombachudo"){
      const cantAux = discountCant - 1
      setDiscountCant(cantAux)
    }
    if(outItem[0].name.split(' ')[0] === "Pantalones" || outItem[0].name.split(' ')[0] === "Manta" || outItem[0].name.split(' ')[0] === "Alfombra" || outItem[0].name.split(' ')[0] === "Cambiador"){
      const cantAux = discountCant - 2
      setDiscountCant(cantAux)
    }
    if(outItem[0].name.split(' ')[0] === "Caja"){
      const cantAux = discountCant - 3
      setDiscountCant(cantAux)
    }
  }else{
    const outItem = articlesCart.filter(item => item.name === payload && item.cuelloGorroSizeChoice === cuelloGorroSizeChoice)
    let articleIndex
    let articleAmount = articlesCart
    const cantAux = discountCant
    for(let i=0; i<articlesCart.length; i++){
      if(articlesCart[i].name === payload && articlesCart[i].cuelloGorroSizeChoice === cuelloGorroSizeChoice){
        articleIndex = i
      }
    }
    articleAmount[articleIndex].amount--
    setArticlesCart([...articleAmount])
    setItemToDataBase([...articleAmount])
    setDiscountCant(cantAux)
    if(outItem[0].name.split(' ')[0] === "Cuellogorro" || outItem[0].name.split(' ')[0] === "Botitas" || outItem[0].name.split(' ')[0] === "Bufanda" || outItem[0].name.split(' ')[0] === "Manoplas" || outItem[0].name.split(' ')[0] === "Babero" || outItem[0].name.split(' ')[0] === "Apegos" || outItem[0].name.split(' ')[0] === "Turbantes" || outItem[0].name.split(' ')[0] === "Babytas" || outItem[0].name.split(' ')[0] === "Gorro" || outItem[0].name.split(' ')[0] === "Wawita" || outItem[0].name.split(' ')[0] === "Batitas" || outItem[0].name.split(' ')[0] === "Bombachudo"){
      const cantAux = discountCant - 1
      setDiscountCant(cantAux)
    }
    if(outItem[0].name.split(' ')[0] === "Pantalones" || outItem[0].name.split(' ')[0] === "Manta" || outItem[0].name.split(' ')[0] === "Alfombra" || outItem[0].name.split(' ')[0] === "Cambiador"){
      const cantAux = discountCant - 2
      setDiscountCant(cantAux)
    }
    if(outItem[0].name.split(' ')[0] === "Caja"){
      const cantAux = discountCant - 3
      setDiscountCant(cantAux)
    }
  }
}