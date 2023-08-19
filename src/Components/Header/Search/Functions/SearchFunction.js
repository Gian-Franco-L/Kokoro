const searchFunction = (event, allArticles, setSearchedArticles) =>{
  let filterItems = allArticles.filter(value =>{
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

function clearSearch(setSearchedArticles){
  const SearchInputRef = document.getElementById("searchInputRef")
  SearchInputRef.value = ""
  setSearchedArticles(null)
}

export { searchFunction, clearSearch }