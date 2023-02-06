import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"

const Searched = ({
  items,
  itemsPrice,
  size,
  material,
  stuffing,
  choice,
  img
}) => {

  const {
    searchedArticles,
    setOpenArticlesModal,
    setModalArticle,
  } = useContext(AppContext)

  function changeModalState(){
    setOpenArticlesModal(true)
    setModalArticle({
      'item': items,
      'itemsPrice': itemsPrice,
      'size': size,
      'material': material,
      'stuffing': stuffing,
      'choice': choice,
      'img': img
    })
  }
  return(
    <SearchedItem onClick={changeModalState}>
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
      color: #AD8B73;
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
  justify-content: space-around;
  height: 90px;
  width: 70%;
`

const ItemName = styled.div`
  font-size: 1.05rem;
  text-align: center;
`

const ItemPrice = styled.div`
  font-size: 1.05rem;
  text-align: center;
`
export { Searched }