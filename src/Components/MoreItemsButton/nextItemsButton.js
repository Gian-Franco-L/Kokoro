export default function nextItems(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount, setPageCount) {
  if(showArticles.length>=12)
  {
    let articlesCountAux = articlesCount
    let limitAlert = 0
    let articlesAux = []

    for(let i=0; i<12; i++){
      if(articlesCountAux < totalArticles.length && limitAlert<12)
      {
        limitAlert++
        articlesCountAux++
        setArticlesCount(articlesCountAux)
        articlesAux = [...articlesAux, totalArticles[articlesCountAux-1]]
      }
    }

    if(limitAlert !== 12) setArticlesLimitCount(limitAlert)
    
    setShowArticles(articlesAux)
    setPageCount(prevState => prevState + 1)
  }
}