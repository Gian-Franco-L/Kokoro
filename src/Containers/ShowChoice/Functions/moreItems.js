export default function moreItems(showArticles, setShowArticles, totalArticles, articlesCount, setArticlesCount, filterItems) {
  if(filterItems.length>=10)
  {
    let articlesAux = showArticles
    let articlesCountAux = articlesCount
    for(let j=0; j<10; j++){
      articlesCountAux++
      setArticlesCount(articlesCountAux)
      if(articlesCountAux <= totalArticles.length){
        articlesAux = [...articlesAux, totalArticles[articlesCountAux-1]]
        setShowArticles(articlesAux)
      }
    }
  }
}