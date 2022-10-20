export default function searchFunction (event, totalArticles, searchedArticles, setSearchedArticles){
    let filterItems = totalArticles.filter(value =>{
      const todoText = value.Name.toLowerCase()
      const searchText = event.target.value.toLowerCase()
      return todoText.includes(searchText)
    })
  if(event.target.value.length > 1){
    setSearchedArticles(filterItems)
    if(filterItems.length === 0){
      setSearchedArticles([{Name: "No hay resultados para su busqueda"}])
      console.log(searchedArticles)
    }
  }else{
    setSearchedArticles(null)
  }
}