export default function nextItems(showArticles, setShowArticles, setArticlesLimitCount, totalArticles, articlesCount, setArticlesCount) {

  if(showArticles.length>=9)
  {
    let articlesCountAux = articlesCount
    let limitAlert = 0
    let articlesAux = []

    for(let i=0; i<9; i++){
      if(articlesCountAux < totalArticles.length && limitAlert<9)
      {
        limitAlert++
        articlesCountAux++
        setArticlesCount(articlesCountAux)
        articlesAux = [...articlesAux, totalArticles[articlesCountAux-1]]
      }
    }

    if(limitAlert !== 9) setArticlesLimitCount(limitAlert)
    setShowArticles(articlesAux)
  }
}