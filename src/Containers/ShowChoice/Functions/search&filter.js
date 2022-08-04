const searchFunction = (event, setSearchValue) =>{
  setSearchValue(event.target.value)
}
const filterPriceTime = (filterChoice, setPriceTimeChoice) =>{
  setPriceTimeChoice(filterChoice.value)
}

export { searchFunction, filterPriceTime }