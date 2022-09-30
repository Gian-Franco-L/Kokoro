export default function enabledItems(setShowArticles, setArticlesCount, articulos, tipes, totalArticles) {
  let articlesAux = []
  articulos.current.className = "disapearArticles"
  setTimeout(() => {
    tipes.current.className = "apearTipeOfArticles"
    tipes.current.style.display = "flex"
    articulos.current.style.display = "none"
    for(let i=0; i<12; i++){
      articlesAux.push(totalArticles[i])
    }
    setShowArticles(articlesAux)
    setArticlesCount(9)
  }, 950)
}