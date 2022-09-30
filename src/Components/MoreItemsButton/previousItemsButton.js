export default function previousItems(setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount) {
    let articlesCountAux = articlesCount
    let limitAlert = 0
    let articlesAux = []

    for(let i=0; i<12; i++){
      if(articlesCountAux > 0 && limitAlert<12)
      {
        limitAlert++
        articlesCountAux--
        setArticlesCount(articlesCountAux)
        articlesAux.unshift(totalArticles[articlesCountAux-1])
      }
    }

    if(articlesLimitCount !== 12){
      setArticlesCount(articlesCountAux+(12-articlesLimitCount))
      setArticlesLimitCount(12)
    }
    
    setShowArticles(articlesAux)
    setPageCount(prevState => prevState - 1)
  }