import React, { useContext } from "react"
import styled from "styled-components"
import { Items } from "./Items/Items"
import { Filter } from "./Filter/Filter"
import { v4 as uuidv4 } from "uuid"
import { Skeletons } from "./Skeletons/Skeletons"
import { DiscountHelp } from "./DiscountHelp/DiscountHelp"
import { DiscountHelpButton } from "./DiscountHelpButton/DiscountHelpButton"
import { AppContext } from "../../Context/AppContext"
import { FilterButton } from "./FilterButton/FilterButton"
import { AiFillStar } from "react-icons/ai"

const ArticlesContainer = ({ backNextToTop }) =>{

  const {
    showArticles
  } = useContext(AppContext)

  return(
    <ArticleContainer >
      <Tittle ref={backNextToTop}><Star1 />Articulos</Tittle>
      {/* <Tittle ref={backNextToTop}><Star1 />Articulos<Star2 /></Tittle> */}
      {
        !window.matchMedia("(max-width: 991px)").matches
          ? <DiscountHelp />
          : <DiscountHelpButton />
      }
      {
        !window.matchMedia("(max-width: 991px)").matches
          ? <Filter />
          : <FilterButton />
      }
      <div>
        <ItemsContainer>
          {showArticles.length !== 0 ? showArticles.map(item =>(
            item.Status 
              ? <Items 
                  name={item.Name}
                  price={item.Price}
                  date={item.Date}
                  size={item.Size}
                  material={item.Material}
                  stuffing={item.Stuffing}
                  itemType={item.Type}
                  status={item.Status}
                  img={item.Img}
                  key={uuidv4()}
                />
             : null
          ))
          : <Skeletons />}
        </ItemsContainer>
      </div>
    </ArticleContainer>
  )
}

// const Star1 = styled(AiFillStar)`
//   position: absolute;
//   left: 5%;
//   top: 40%;
//   height: 45px;
//   width: 45px;
//   color: #AC8DAF;
// `
// const Star2 = styled(AiFillStar)`
//   position: absolute;
//   right: 1%;
//   top: 40%;
//   height: 45px;
//   width: 45px;
//   color: #AC8DAF;
// `

const Star1 = styled(AiFillStar)`
  position: absolute;
  left: 46%;
  top: 32%;
  font-size: clamp(.7rem, 2vw, 1.5rem);
  color: #AC8DAF;
  background-color: #ebe9eb;
`

const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Tittle = styled.h1`
  position: relative;
  font-family: 'Festive', cursive;
  font-size: clamp(5rem, 15vw, 11rem);
  color: black;
  margin-right: 1%;
  scroll-margin-top: 140px;
  @media only screen and (max-width: 991px){
    margin-top: 50px;
    scroll-margin-top: 125px;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 7%;
  margin-right: 7%;
  @media only screen and (max-width: 584px){
    margin-left: 1%;
    margin-right: 1%;
  }
`

export { ArticlesContainer }