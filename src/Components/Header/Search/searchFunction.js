export default function searchFunction (event, totalArticles, setSearchedArticles){
    let filterItems = totalArticles.filter(value =>{
      const todoText = value.Name.toLowerCase()
      const searchText = event.target.value.toLowerCase()
      return todoText.includes(searchText)
    })
  if(event.target.value.length > 1){
    setSearchedArticles(filterItems)
    if(filterItems.length === 0){
      setSearchedArticles(-1)
    }
  }else{
    setSearchedArticles(null)
  }
}