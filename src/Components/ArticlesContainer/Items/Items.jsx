import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import { changeModalState } from "./Functions/ItemFunctions"
import styled from "styled-components"

const Items = ({
  name,
  price,
  date,
  size,
  material,
  stuffing,
  itemType,
  status,
  img
}) =>{

  const {
    setOpenArticlesModal,
    setModalArticle,
  } = useContext(AppContext)

  const body = document.getElementById("body")

  let updateObject = {
    'Name': name,
    'Price': price,
    'Date': date,
    'Size': size,
    'Fabric': material,
    'Stuffing': stuffing,
    'Type': itemType,
    'Status': status,
    'Img': img
  }

  return(
    <>
     {
      updateObject.Status === "on"
        ? <MainContainer onClick={() => changeModalState(body, setModalArticle, setOpenArticlesModal, updateObject)}>
            <BorderContainer>
              <ArticleItem img={img}/>
              <ArticleInfo>{name}</ArticleInfo>
            </BorderContainer>
          </MainContainer>
        : null
     }
    </>
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
  padding: 3px;
  margin-top: 4%;
  margin-left: 2%;
  margin-right: 2%;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 8px #AC8DAF;
  border-radius: 20px;
  cursor: pointer;
  :hover{
    transform: scale(1.03)
  }
  @media only screen and (max-width: 991px){
    margin-top: 8%;
    :hover{
      transform: scale(1)
    }
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
  border: 2px solid #AC8DAF;
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