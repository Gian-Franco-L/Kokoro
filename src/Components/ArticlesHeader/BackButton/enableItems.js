export default function enabledItems(startingArticles, setShowArticles, setArticlesCount, articulos, tipes) {
  articulos.current.className = "disapearArticles"
  setTimeout(() => {
    tipes.current.className = "apearTipeOfArticles"
    tipes.current.style.display = "flex"
    articulos.current.style.display = "none"
    setShowArticles(startingArticles)
    setArticlesCount(9)
  }, 950)
}