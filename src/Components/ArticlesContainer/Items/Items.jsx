import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"

const Items = ({
  items,
  itemsPrice,
  size,
  material,
  stuffing,
  choice,
  img
}) =>{
  const {
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
    <MainContainer onClick={changeModalState}>
      <BorderContainer>
        <ArticleItem img={img}/>
        <ArticleInfo>{items}</ArticleInfo>
      </BorderContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  height: 365px;
  width: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 2%;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  /* box-shadow: 1px 1px 5px 1px rgb(125, 125, 125); */
  border-radius: 20px;
  :hover{
    transform: scale(1.03)
  }
  @media only screen and (max-width: 584px){
    width: 200px;
  }
`

const BorderContainer = styled.div`
  height: 98.4%;
  width: 97.5%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
`

const ArticleItem = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 280px;
  width: 200px;
  margin: 15px 0px 12px 12px;
  border-radius: 20px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 584px){
    height: 80%;
    width: 85%;
  }
`

const ArticleInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export { Items }