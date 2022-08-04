export default function disabledItems(tipes, articulos) {
  tipes.current.className = "disapearArticles"
  setTimeout(() => {
    articulos.current.className = "apearArticles"
    tipes.current.style.display = "none"
    articulos.current.style.display = "initial"
  }, 950)
}