import React, { useRef } from "react"
import styled from "styled-components"
import addToCart from "./addToCart"
import "../../CSS/Animation.css"

const ArticlesModal = ({
  setOpenArticlesModal,
  modalArticle,
  articlesCart,
  setArticlesCart,
  setItemToDataBase,
  cartSwitch,
  itemCartAux,
  setItemCartAux,
  userName
}) =>{

  function changeModalState(){
    setOpenArticlesModal(false)
  }

  const plus = useRef(null)
  let buyButton = useRef(null)

  function wrapperFunction(
    payload,
    itemsPrice,
    img,
    articlesCart,
    setArticlesCart,
    cartSwitch,
    itemCartAux,
    setItemCartAux,
    setItemToDataBase){
    addToCart(
      payload,
      itemsPrice,
      img,
      articlesCart,
      setArticlesCart,
      cartSwitch,
      itemCartAux,
      setItemCartAux,
      setItemToDataBase)
    addPlusAnimation()
  }

  function addPlusAnimation(){
    plus.current.classList.add("plusOneAnimation")
    buyButton.current.setAttribute("disabled","")
    setTimeout(() =>{
      plus.current.classList.remove("plusOneAnimation")
      buyButton.current.removeAttribute("disabled")
    },[500])
  }

  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton>
          <button onClick={changeModalState}>X</button>
        </CloseModalButton>
        <Imagen img={modalArticle.img}/>
        <ItemContainer>
          <ItemName><strong>{modalArticle.item}</strong></ItemName>
          <ItemInfo stuffing={modalArticle.stuffing}>
            <Price><span>Precio</span><span>AR$ {modalArticle.itemsPrice}</span></Price>
            <Size><span>Medida</span><span>{modalArticle.size}</span></Size>
            <Material><span>Material</span><span>{modalArticle.material}</span></Material>
            {modalArticle.stuffing !== "none" &&
              <Stuffing><span>Relleno</span><span>{modalArticle.stuffing}</span></Stuffing>
            }
          </ItemInfo>
          {userName
            ? <AddToCartButton stuffing={modalArticle.stuffing} ref={buyButton} onClick={() => wrapperFunction(modalArticle.item, modalArticle.itemsPrice, modalArticle.img, articlesCart, setArticlesCart, cartSwitch, itemCartAux, setItemCartAux, setItemToDataBase)}><BorderContainer>Agregar al carrito<PlusOne ref={plus}>+1</PlusOne></BorderContainer></AddToCartButton>
            : null
          }
          {!userName
            ? <UserWarning>Registrate o inicia session para realizar una compra</UserWarning>
            : null
          }
      </ItemContainer>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  z-index: 1031;
  position: fixed;
  display: flex;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  justify-content: center;
  align-items: center;
  background: rgba(32, 35, 51, 0.8);
`

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  height: 680px;
  width: 900px;
  background-color: #ebe9eb;
  border-radius: 30px;

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    height: 95%;
    width: 80%;
    align-items: center;
  }
`

const CloseModalButton = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.5rem;
    :hover{
      color: #ab6f4a;
    }
  }
`

const Imagen = styled.div`
  height: 630px;
  width: 450px;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    height: 100%;
    width: 80%;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 92.5%;
  width: 38%;
  margin-top: 10px;
  margin-left: 2%;
  font-size: 1.3rem;
  @media only screen and (max-width: 991px) {
    height: 50%;
    width: 90%;
    margin-left: 0%;
  }
`
const ItemName = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 15%;
  margin-bottom: 10%;
  @media only screen and (max-width: 991px) {
    margin-top: 0%;
    margin-bottom: 0%;
  }
`

const ItemInfo = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px rgb(125, 125, 125);
  @media only screen and (max-width: 991px) {

  }
  ${props => props.stuffing === "none" ? "margin-top: 30px" : "margin-top: 5px"}
`

const Price = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, #9f9f9f 50%, #b6b6b6 50%) 0px 0px;
  span:nth-child(1n){
    width: 50%;
    text-align: center;
  }
  span:nth-child(2n){
    border: none;
  }
  @media only screen and (max-width: 991px) {
    height: 50px;
  }
`
const Size = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, #b6b6b6 50%, #d0d0d0 50%) 0px 0px;
  span:nth-child(1n){
    width: 50%;
    text-align: center;
  }
  span:nth-child(2n){
    border: none;
  }
  @media only screen and (max-width: 991px) {
    height: 50px;
  }
`
const Material = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, #d0d0d0 50%, #e0e0e0 50%) 0px 0px;
  span:nth-child(1n){
    width: 50%;
    text-align: center;
  }
  span:nth-child(2n){
    border: none;
  }
  @media only screen and (max-width: 991px) {
    height: 50px;
  }
`
const Stuffing = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, #e0e0e0 50%, #f0f0f0 50%) 0px 0px;
  span:nth-child(1n){
    width: 50%;
    text-align: center;
  }
  span:nth-child(2n){
    border: none;
  }
  @media only screen and (max-width: 991px) {
    height: 50px;
  }
`

const AddToCartButton = styled.button`
  height: 60px;
  width: 150px;
  background-color: white;
  border-radius: 30px;
  font-size: 1rem;
  margin-left: calc(50% - 75px);
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  :disabled{
    color: black;
  }
  @media only screen and (max-width: 991px) {
    height: 40px;
    margin-bottom: 20px;
    ${props => props.stuffing === "none" ? "margin-top: 20px" : "margin-top: 20px"}
  }
  ${props => props.stuffing === "none" ? "margin-top: 90px" : "margin-top: 50px"}
`

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 144px;
  border: 2px solid #CEAB93;
  border-radius: 50px;
  margin-left: calc(50% - 72px);
`

const PlusOne = styled.div`
  position: absolute;
  margin-bottom: 7%;
  margin-left: 17%;
  font-size: 1.3rem;
  color: rgba(150, 100, 70, 0);
`

const UserWarning = styled.p`
  text-align: center;
  padding-top: 20%;
`

export { ArticlesModal }