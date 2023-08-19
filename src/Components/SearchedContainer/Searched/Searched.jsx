import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import { changeModalState } from "./Functions/SearchedFunctions"
import styled from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"

const Searched = ({
  items,
  itemsPrice,
  date,
  size,
  material,
  stuffing,
  type,
  status,
  img
}) => {

  const {
    searchedArticles,
    setOpenArticlesModal,
    setModalArticle,
  } = useContext(AppContext)

  return(
    <SearchedItem onClick={() => changeModalState(
      setOpenArticlesModal, 
      setModalArticle,
      items,
      itemsPrice,
      date,
      size,
      material,
      stuffing,
      type,
      status,
      img
    )}>
      {
        searchedArticles !== -1
          && <>
              <ArrowIcon id="Arrow"><MdOutlineArrowForwardIos /></ArrowIcon>
              <Imagen img={img}></Imagen>
              <NamePriceContainer>
                <ItemName>{items}</ItemName>
                <ItemPrice>AR$ {itemsPrice}</ItemPrice>
              </NamePriceContainer>
             </>
      }
    </SearchedItem>
  )
}

const SearchedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  margin-left: 1.5%;
  border-top: 1px solid #c8c8c8;
  background-color: white;
  cursor: pointer;

  :hover{
    #Arrow{
      display: inline;
      font-size: 1.4rem;
      color: #70416D;
    }
  }
`

const ArrowIcon = styled.div`
 display: none;
 position: absolute;
`

const Imagen = styled.div`
  height: 115px;
  width: 90px;
  background-color: grey;
  border-radius: 20px;
  margin-left: 7%;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
`

const NamePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 70%;
`

const ItemName = styled.div`
  font-size: 1.05rem;
  text-align: center;
  width: 90%;
`

const ItemPrice = styled.div`
  font-size: 1.05rem;
  text-align: center;
  border-bottom: 2px solid #AC8DAF;
`
export { Searched }