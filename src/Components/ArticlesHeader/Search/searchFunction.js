export default function searchFunction (event, setSearchValue, searchValue, totalArticles, setSearchedArticles){
  setSearchValue(event.target.value)
  let filterItems = totalArticles.filter(value =>{
    const todoText = value.Name.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  setSearchedArticles(filterItems)
}