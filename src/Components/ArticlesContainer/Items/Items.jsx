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

  const body = document.getElementById("body")

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
    body.style.overflowY = "hidden"
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 365px;
  width: 232px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 2%;
  padding: 3px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  border-radius: 20px;
  :hover{
    transform: scale(1.03)
  }
  @media only screen and (max-width: 584px){
    width: 250px;
  }
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
`

const ArticleItem = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 275px;
  width: 200px;
  border-radius: 20px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 584px){
    height: 77%;
    width: 91%;
  }
`

const ArticleInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`

export { Items }