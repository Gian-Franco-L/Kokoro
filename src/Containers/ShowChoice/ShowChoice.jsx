import React, { useContext, useRef } from "react"
import styled from "styled-components"
import { Items } from "../../Components/Items/Items"
import { ShoppingCart } from "../../Components/ShoppingCart/ShoppingCart"
import { AppContext } from "../../Context/AppContext"
import CarButton from "../../Components/CarButton/CarButton"
import Search from "../../Components/Search/Search"
import Filter from "../../Components/Filter/Filter"
import MoreItems from "../../Components/MoreItems/MoreItems"
import BackButton from "../../Components/BackButton/BackButton"
import '../../CSS/Animation.css';

const ShowChoice = ({ articulos, tipes }) =>{
  const {
    showArticles,
    totalArticles,
    searchValue,
    priceTimeChoice,
  } = useContext(AppContext)

  const showCart = useRef(null)
  let filterItems = showArticles

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
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(priceTimeChoice === "<time"){
    totalArticles.sort((a, b) => b.Date - a.Date)
    for(let i=0; i<showArticles.length; i++){
      filterItems[i] = totalArticles[i]
    }
  }
  if(searchValue.length < 1){
    filterItems = showArticles
  }else{
    filterItems = totalArticles.filter(value =>{
      const todoText = value.Name.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  return(
    <MainContainer ref={articulos}>
        <ArticleHeader>
          <BackButton 
            articulos={articulos}
            tipes={tipes}
          />
          <Filter />
          <Search />
          <CarButton showCart={showCart} />
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
        <MoreItems  filterItems={filterItems}/>
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

export { ShowChoice }