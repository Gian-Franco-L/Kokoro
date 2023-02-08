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
  userName,
  setOpenLoginModal,
  setLoginRegisterElection
}) =>{

  const body = document.getElementById("body")

  function changeModalState(){
    setOpenArticlesModal(false)
    body.style.overflowY = "inherit"
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

  function altRegisterLogin(election){
    setOpenArticlesModal(false)
    setOpenLoginModal(true)
    setLoginRegisterElection(election)
  }

  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton>
          <button onClick={changeModalState}>X</button>
        </CloseModalButton>
        <ItemName><strong>{modalArticle.item}</strong></ItemName>
        <Imagen img={modalArticle.img}/>
        <ItemContainer>
          <ItemInfo stuffing={modalArticle.stuffing}>
            <Price><span>Precio</span><span>AR$ {modalArticle.itemsPrice}</span></Price>
            <Size><span>Medida</span><span>{modalArticle.size}</span></Size>
            <Material><span>Material</span><span>{modalArticle.material}</span></Material>
            {modalArticle.stuffing !== "none" &&
              <Stuffing><span>Relleno</span><span>{modalArticle.stuffing}</span></Stuffing>
            }
          </ItemInfo>
          {userName
            ? <BuyContainer stuffing={modalArticle.stuffing}><BorderContainerRegisterButton><AddToCartButton ref={buyButton} onClick={() => wrapperFunction(modalArticle.item, modalArticle.itemsPrice, modalArticle.img, articlesCart, setArticlesCart, cartSwitch, itemCartAux, setItemCartAux, setItemToDataBase)}>Agregar al carrito<PlusOne ref={plus}>+1</PlusOne></AddToCartButton></BorderContainerRegisterButton></BuyContainer>
            : null
          }
          {!userName
            ? <UserWarning stuffing={modalArticle.stuffing}><AltRegisterLogin onClick={() => altRegisterLogin("register")}>Registrate</AltRegisterLogin> o <AltRegisterLogin onClick={() => altRegisterLogin("logIn")}>Inicia sesión</AltRegisterLogin> para realizar una compra</UserWarning>
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
  z-index: 1;
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
    margin-top: 0px;
    height: 100%;
    width: 75%;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  height: 92.5%;
  width: 38%;
  margin-top: 150px;
  margin-left: 2%;
  font-size: 1.3rem;
  @media only screen and (max-width: 991px) {
    justify-content: space-around;
    height: 50%;
    width: 90%;
    margin-left: 0%;
    margin-top: 0px;
  }
`
const ItemName = styled.div`
  position: absolute;
  display: flex;
  height: 40px;
  width: 340px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: clamp(1rem, 6vw, 1.6rem);
  margin-top: 7%;
  margin-left: 58%;
  @media only screen and (max-width: 991px) {
    position: relative;
    width: 80%;
    margin-top: 5%;
    margin-bottom: 3%;
    margin-left: 0%;
  }
`

const ItemInfo = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px rgb(125, 125, 125);
  font-size: clamp(1rem, 4vw, 1.3rem);
  @media only screen and (max-width: 991px) {
    ${props => props.stuffing === "none" ? "margin-top: 15px" : "margin-top: 10px"}
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
    padding-left: 2%;
    padding-right: 2%;
  }
  @media only screen and (max-width: 991px) {
    height: 65px;
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

// const AddToCartButton = styled.button`
//   height: 60px;
//   width: 150px;
//   background-color: white;
//   border-radius: 30px;
//   font-size: 1rem;
//   margin-left: calc(50% - 75px);
//   border: none;
//   cursor: pointer;
//   box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
//   :disabled{
//     color: black;
//   }
//   @media only screen and (max-width: 991px) {
//     height: 40px;
//     margin-bottom: 10px;
//     margin-top: 10px
//   }
// `

const PlusOne = styled.div`
  position: absolute;
  margin-bottom: 7%;
  margin-left: 17%;
  font-size: 1.3rem;
  color: rgba(150, 100, 70, 0);
`

const UserWarning = styled.p`
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-top: 10px;
  }
  ${props => props.stuffing === "none" ? "margin-top: 20%" : "margin-top: 10%"}
`

const AltRegisterLogin = styled.span`
  color: #ab6f4a;
  cursor: pointer;
  :hover{
    border-bottom: 2px solid #ab6f4a;
  }
`

const BuyContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  padding: 3px;
  background-color: #f5f5f5;
  margin-left: calc(50% - 100px);
  border-radius: 50px;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
  :hover{
    transform: scale(1.05);
  }
  :active{
    box-shadow: 0px 0px 5px 1px #ab6f4a;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  ${props => props.stuffing === "none" ? "margin-top: 70px" : "margin-top: 40px"}
`

const BorderContainerRegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
`

const AddToCartButton = styled.button`
  background-color: transparent;
  border: none;
`

export { ArticlesModal }