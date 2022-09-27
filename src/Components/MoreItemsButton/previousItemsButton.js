export default function previousItems(setShowArticles, articlesLimitCount, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount) {
    let articlesCountAux = articlesCount
    let limitAlert = 0
    let articlesAux = []

    for(let i=0; i<9; i++){
      if(articlesCountAux > 0 && limitAlert<9)
      {
        limitAlert++
        articlesCountAux--
        setArticlesCount(articlesCountAux)
        articlesAux.unshift(totalArticles[articlesCountAux-1])
      }
    }

    if(articlesLimitCount !== 9){
      setArticlesCount(articlesCountAux+(9-articlesLimitCount))
      setArticlesLimitCount(9)
    }
    
    setShowArticles(articlesAux)
  }