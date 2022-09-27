export default function disabledItems(tipes, articulos, setArticleChoice, selected) {
  tipes.current.className = "disapearTipeOfArticles"
  setArticleChoice(selected)
  setTimeout(() => {
    articulos.current.className = "apearArticles"
    tipes.current.style.display = "none"
    articulos.current.style.display = "flex"
  }, 950)
}