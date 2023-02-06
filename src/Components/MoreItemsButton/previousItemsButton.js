export default function previousItems(setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount) {
    let articlesCountAux = articlesCount
    let limitAlert = 0
    let articlesAux = []

    for(let i=0; i<15; i++){
      if(articlesCountAux > 0 && limitAlert<15)
      {
        limitAlert++
        articlesCountAux--
        setArticlesCount(articlesCountAux)
        articlesAux.unshift(totalArticles[articlesCountAux-articlesLimitCount])
      }
    }

    if(articlesLimitCount !== 15){
      setArticlesCount(articlesCountAux+(15-articlesLimitCount))
      setArticlesLimitCount(15)
    }
    
    setShowArticles(articlesAux)
    setPageCount(prevState => prevState - 1)
  }