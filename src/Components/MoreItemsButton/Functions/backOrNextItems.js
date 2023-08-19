export function backOrNextItems({
  backOrNextChoice,
  setShowArticles,
  articlesLimitCount,
  setArticlesLimitCount,
  totalHomeArticles,
  totalWinterArticles,
  articlesCount,
  setArticlesCount,
  setPageCount,
  articleChoice
}){

  let articlesCountAux = articlesCount
  let limitAlert = 0
  let articlesAux = []
  const sign = backOrNextChoice === "back" ? -1 : 1
  const articlesType = articleChoice === "hogar" ? totalHomeArticles : totalWinterArticles

  if(backOrNextChoice === "back"){
    for(let i=0; i<15; i++){
      if(articlesCountAux > 0 && limitAlert<15)
      {
        limitAlert++
        articlesCountAux--
        articlesAux.unshift(articlesType[articlesCountAux-articlesLimitCount])
      }
      setArticlesCount(articlesCountAux)
    }
  
    if(articlesLimitCount !== 15){
      setArticlesCount(articlesCountAux+(15-articlesLimitCount))
      setArticlesLimitCount(15)
    }
  }else if(backOrNextChoice === "next"){
    for(let i=0; i<15; i++){
      if(articlesCountAux < articlesType.length && limitAlert<15)
      {
        limitAlert++
        articlesCountAux++
        articlesAux = [...articlesAux, articlesType[articlesCountAux-1]]
      }
      setArticlesCount(articlesCountAux)
    }

    if(limitAlert !== 15) setArticlesLimitCount(limitAlert)
  }

  setShowArticles(articlesAux)
  setPageCount(prevState => prevState + sign)
}

export function toTop(backNextToTop){
  backNextToTop.current.scrollIntoView({
    behavior: 'smooth',
  })
}