const closeCartOnProfile = (
  articlesCart,
  setOnOffCartButton,
  setCartSwitch,
  setArticlesCart
) =>{
  let articlesToPop = articlesCart
  let cantOfArticles = articlesCart.length
  setOnOffCartButton(false)
  setCartSwitch("off")

  for(let i=0; i<articlesCart.length; i++){
    setTimeout(() =>{
      articlesToPop.pop()
      setArticlesCart([...articlesToPop])
    }, [((1/cantOfArticles) * (i+1)) * 1000])
  }
}

export { closeCartOnProfile }