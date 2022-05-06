import React, { useContext, useRef } from "react"
import styled from "styled-components"
import { Items } from "../Components/Items"
import { ShoppingCart } from "../Components/ShoppingCart"
import { AppContext } from "../Context/AppContext"
import Select from "react-select"
import '../CSS/Animation.css';

const ShowChoice = ({ articulos, tipes }) =>{
  const {
    startingArticles,
    showArticles,
    setShowArticles,
    articlesCount,
    setArticlesCount,
    totalArticles,
    searchValue,
    setSearchValue,
    priceTimeChoice,
    setPriceTimeChoice
  } = useContext(AppContext)

  const showCart = useRef(null)
  let filterItems = showArticles
  const optionValue= [
    {value: "none", label: "Sin filtro"},
    {value: ">$", label: "Precio mayor a menor"},
    {value: "<$", label: "Precio menor a mayor"},
    {value: ">time", label: "Mas viejo a mas nuevo"},
    {value: "<time", label: "Mas nuevo a mas viejo"}
  ]

  function enabledItems() {
    articulos.current.className = "disapearArticles"
    setTimeout(() => {
      tipes.current.className = "apearArticles"
      tipes.current.style.display = "flex"
      articulos.current.style.display = "none"
      setShowArticles(startingArticles)
    }, 950)
  }

  const visibleCar = () =>{
    showCart.current.className = "apearCart"
    setTimeout(() =>{
      showCart.current.className = "CartOn"
    }, 980)
  }

  function moreItems() {
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

  const searchFunction = (event) =>{
    setSearchValue(event.target.value)
  }
  const filterPriceTime = (filterChoice) =>{
    setPriceTimeChoice(filterChoice.value)
  }

  if(searchValue.length < 1){
    filterItems = showArticles
  }else{
    filterItems = showArticles.filter(value =>{
      const todoText = value.Name.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  if(priceTimeChoice === "none"){
    totalArticles.sort((a, b) => a.id - b.id)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(priceTimeChoice === ">$"){
    totalArticles.sort((a, b) => a.Price - b.Price)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(priceTimeChoice === "<$"){
    totalArticles.sort((a, b) => b.Price - a.Price)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(priceTimeChoice === ">time"){
    totalArticles.sort((a, b) => a.Date - b.Date)
    console.log(totalArticles)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(priceTimeChoice === "<time"){
    totalArticles.sort((a, b) => b.Date - a.Date)
    console.log(totalArticles)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  return(
    <MainContainer ref={articulos}>
        <ArticleHeader>
          <BackButton>
            <button onClick={enabledItems}>Back</button>
          </BackButton>
          <Filter>
            <label htmlFor="filter"></label>
            <Select
              placeholder="Filtrar por..."
              defaultValue=""
              classNamePrefix="select"
              name="type"
              options={optionValue}
              onChange={filterPriceTime}
            />
          </Filter>
          <Search>
            <input 
            onChange={searchFunction}
            />
          </Search>
          <CarButton>
            <button onClick={visibleCar}>Car</button>
          </CarButton>
        </ArticleHeader>
        <ArticlesContainer>
            <Main>
              {filterItems.map(item =>(
                <Items 
                  items={item.Name}
                  itemsPrice={item.Price}
                  key={item.Price}
                />
              ))}
            </Main>
        <ShoppingCart showCart={showCart}/>
        </ArticlesContainer>
        <MoreItems onClick={moreItems}/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: none;
  max-width: 100%;
`

const ArticleHeader = styled.div`
  position: sticky;
  z-index: 1;
  display: flex;
  border: 2px solid black;
  align-items: center;
  background-color: white;
  height: 100px;
  width: 100%;
  top: 0;
  margin: 10px 0px 20px 0px;
`

const BackButton = styled.div`
  position: relative;
  left: 5%;
  button{
    height: 80px;
    width: 230px;
  }
`

const Filter = styled.div`
  position: absolute;
  left: 30%;
  width: 200px;
`

const Search = styled.div`
position: absolute;
left: 55%;
width: 200px;
`

const CarButton = styled.div`
  position: absolute;
  left: 80%;
  button{
    height: 80px;
    width: 230px;
  }
`

const ArticlesContainer = styled.div`
  display: flex;
`

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const MoreItems = styled.button`
  position: relative;
  height: 50px;
  width: 100px;
  left: calc(50% - 50px);
  margin-bottom: 50px;
`

export { ShowChoice }