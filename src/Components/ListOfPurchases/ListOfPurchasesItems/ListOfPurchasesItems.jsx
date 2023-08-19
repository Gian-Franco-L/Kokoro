import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { changeItemState } from "./Functions/ListOfPurchasesItemsFunctions"
import productService from "../../../Services/product"

const ListOfPurchasesItems = ({
  userName,
  id,
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

  const border = useRef(null)

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

  useEffect(() =>{
    if(border.current){
      updateObject.Status === "on" 
        ? border.current.style.border = "2px solid green"
        : border.current.style.border = "2px solid red"
    }
  }, [])

  return(
    <MainContainer onClick={() => changeItemState(updateObject, border, productService, id, userName)}>
      <BorderContainerProfile ref={border}>
        <ArticleItem img={img}/>
      </BorderContainerProfile>
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
  @media only screen and (max-width: 991px){
    margin-right: 0%;
    :hover{
    transform: scale(1)
  }
  }
  @media only screen and (max-width: 584px){
    width: 250px;
  }
`

const BorderContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

export { ListOfPurchasesItems }