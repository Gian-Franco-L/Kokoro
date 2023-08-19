import React, { useContext } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { MdClose } from 'react-icons/md'
import { AiFillStar } from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'
import { ItemInfo } from "./ItemInfo/ItemInfo"
import { AppContext } from '../../Context/AppContext'
import { usePlusSignAndBuyContainerPosition } from '../../Hooks/usePlusSignAndBuyContainerPosition'
import {
  addToCart,
  changeModalState,
  altRegisterLogin,
  wrapperFunction,
  addPlusAnimation,
  apearGlobalImg,
  disappearGlobalImg,
  openCloseSizeChoice,
  selectedChoice,
  noChoice} from './Functions/ArticlesModalFunctions'

const ArticlesModal = () =>{
  const {
    articlesCart,
    setArticlesCart,
    cartSwitch,
    setOpenArticlesModal,
    setOpenLoginModal,
    modalArticle,
    itemCartAux,
    setItemCartAux,
    setItemToDataBase,
    userName,
    setLoginRegisterElection,
    cuelloGorroSizes,
    setCuelloGorroSizes,
    cuelloGorroSizeChoice,
    setCuelloGorroSizeChoice,
    discountCant,
    setDiscountCant,
    cantAdded,
    setCantAdded,
    globalImagenDisplay,
    setGlobalImagenDisplay,
    closeGlobalImage,
    setCloseGlobalImage,
    sizeChoiceButtonDisplay,
    setSizeChoiceButtonDisplay,
    buyContainerEnableOrFlex,
    setBuyContainerEnableOrFlex,
    plusStatus,
    setPlusStatus,
    sizeApearContainerStatus,
    setSizeApearContainerStatus,
    sizeAlert,
    setSizeAlert
  } = useContext(AppContext)

  const body = document.getElementById('body')
  usePlusSignAndBuyContainerPosition({ setBuyContainerEnableOrFlex })

  return(
    <Overlay>
      <ModalContainer>
        <GlobalImage img={modalArticle.img} globalImagenDisplay={globalImagenDisplay}>
          <CloseGlobalImage onClick={() => disappearGlobalImg(setGlobalImagenDisplay, setCloseGlobalImage)} />
        </ GlobalImage>
        <CloseButtonContainer closeGlobalImage={closeGlobalImage} />
        <BorderContainer>
          <CloseModalButton onClick={() => changeModalState(
            body,
            setCuelloGorroSizes,
            setOpenArticlesModal,
            setCantAdded,
            setCuelloGorroSizeChoice,
            setSizeApearContainerStatus,
            setPlusStatus)} />
          <Imagen name={modalArticle.item} img={modalArticle.img} onClick={() => apearGlobalImg(setGlobalImagenDisplay, setCloseGlobalImage)} />
          <ItemContainer>
            <ItemName>{modalArticle.item}</ItemName>
            <ItemInfo  modalArticle={modalArticle}/>
            <BuyContainer buyContainerEnableOrFlex={buyContainerEnableOrFlex}>
              {
                (modalArticle.item.split(' ')[0] === 'Cuellogorro') && modalArticle.item.split(' ')[1] !== 'mix'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                          {cuelloGorroSizes.map(item =>(
                            <div
                            item={item}
                            key={uuidv4()}
                            >
                            <h4 onClick={() => selectedChoice(
                              item,
                              setCuelloGorroSizeChoice,
                              openCloseSizeChoice,
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>{item}</h4>
                            </div>
                          ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                modalArticle.item.split(' ')[0] === 'Botitas' && modalArticle.item.split(' ')[modalArticle.item.split(' ').length-1] !== 'mix'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                        {cuelloGorroSizes.map(item =>(
                          <div
                            item={item}
                            key={uuidv4()}
                          >
                          <h4 onClick={() => selectedChoice(
                            item,
                            setCuelloGorroSizeChoice,
                            openCloseSizeChoice,
                            setSizeChoiceButtonDisplay,
                            cuelloGorroSizes,
                            modalArticle,
                            setSizeApearContainerStatus,
                            setCuelloGorroSizes)}>{item}</h4>
                          </div>
                        ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                modalArticle.item.split(' ')[0] === 'Pantalon'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                        {cuelloGorroSizes.map(item =>(
                          <div
                            item={item}
                            key={uuidv4()}
                          >
                          <h4 onClick={() => selectedChoice(
                            item,
                            setCuelloGorroSizeChoice,
                            openCloseSizeChoice,
                            setSizeChoiceButtonDisplay,
                            cuelloGorroSizes,
                            modalArticle,
                            setSizeApearContainerStatus,
                            setCuelloGorroSizes)}>{item}</h4>
                          </div>
                        ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                modalArticle.item.split(' ')[0] === 'Batitas' && modalArticle.item.split(' ')[modalArticle.item.split(' ').length-1] !== 'mix'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                        {cuelloGorroSizes.map(item =>(
                          <div
                            item={item}
                            key={uuidv4()}
                          >
                          <h4 onClick={() => selectedChoice(
                            item,
                            setCuelloGorroSizeChoice,
                            openCloseSizeChoice,
                            setSizeChoiceButtonDisplay,
                            cuelloGorroSizes,
                            modalArticle,
                            setSizeApearContainerStatus,
                            setCuelloGorroSizes)}>{item}</h4>
                          </div>
                        ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                modalArticle.item.split(' ')[0] === 'Bombachudo' && modalArticle.item.split(' ')[modalArticle.item.split(' ').length-1] !== 'mix'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                        {cuelloGorroSizes.map(item =>(
                          <div
                            item={item}
                            key={uuidv4()}
                          >
                          <h4 onClick={() => selectedChoice(
                            item,
                            setCuelloGorroSizeChoice,
                            openCloseSizeChoice,
                            setSizeChoiceButtonDisplay,
                            cuelloGorroSizes,
                            modalArticle,
                            setSizeApearContainerStatus,
                            setCuelloGorroSizes)}>{item}</h4>
                          </div>
                        ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                modalArticle.item.split(' ')[0] === 'Gorro'
                  &&  <SizeContainer>
                        {sizeChoiceButtonDisplay
                          ? <TContainer onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                          : <TContainer disabled onClick={() => openCloseSizeChoice(
                              setSizeChoiceButtonDisplay,
                              cuelloGorroSizes,
                              modalArticle,
                              setSizeApearContainerStatus,
                              setCuelloGorroSizes)}>
                                <BorderContainerButton sizeAlert={sizeAlert}>
                                  Medida: {cuelloGorroSizeChoice}
                                </BorderContainerButton>
                            </TContainer>
                        }
                        <SizeApearContainer sizeApearContainerStatus={sizeApearContainerStatus}>
                        {cuelloGorroSizes.map(item =>(
                          <div
                            item={item}
                            key={uuidv4()}
                          >
                          <h4 onClick={() => selectedChoice(
                            item,
                            setCuelloGorroSizeChoice,
                            openCloseSizeChoice,
                            setSizeChoiceButtonDisplay,
                            cuelloGorroSizes,
                            modalArticle,
                            setSizeApearContainerStatus,
                            setCuelloGorroSizes)}>{item}</h4>
                          </div>
                        ))}
                        </SizeApearContainer>
                      </SizeContainer>
              }
              {
                userName
                  &&  <>
                        <PlusOne cuelloGorroSizeChoice={cuelloGorroSizeChoice} plusStatus={plusStatus} id="plus">
                          +{cantAdded}
                        </PlusOne>
                        <ButtonContainer onClick={() => wrapperFunction(
                          modalArticle,
                          addPlusAnimation,
                          setPlusStatus,
                          cantAdded,
                          setCantAdded,
                          modalArticle.item,
                          modalArticle.price,
                          modalArticle.img,
                          articlesCart,
                          setArticlesCart,
                          cartSwitch,
                          itemCartAux,
                          setItemCartAux,
                          setItemToDataBase,
                          discountCant,
                          setDiscountCant,
                          cuelloGorroSizeChoice,
                          addToCart,
                          noChoice,
                          setSizeChoiceButtonDisplay,
                          cuelloGorroSizes,
                          setSizeApearContainerStatus,
                          setCuelloGorroSizes,
                          setSizeAlert)}>
                          <BorderContainerButton>
                            <AddToCartButton>Agregar al carrito
                              {
                                modalArticle.item.split(' ')[0] === "Cuellogorro" || modalArticle.item.split(' ')[0] === "Botitas" || modalArticle.item.split(' ')[0] === "Bufanda" || modalArticle.item.split(' ')[0] === "Manoplas" || modalArticle.item.split(' ')[0] === "Babero" || modalArticle.item.split(' ')[0] === "Apegos" || modalArticle.item.split(' ')[0] === "Turbantes" || modalArticle.item.split(' ')[0] === "Babytas" || modalArticle.item.split(' ')[0] === "Gorro" || modalArticle.item.split(' ')[0] === "Wawita" || modalArticle.item.split(' ')[0] === "Batitas" || modalArticle.item.split(' ')[0] === "Bombachudo"
                                ?  <StarsCant>+1<Star /></StarsCant>
                                : null
                              }
                              {
                                modalArticle.item.split(' ')[0] === "Pantalones" || modalArticle.item.split(' ')[0] === "Manta" || modalArticle.item.split(' ')[0] === "Alfombra" || modalArticle.item.split(' ')[0] === "Cambiador"
                                  ?  <StarsCant>+2<Star /></StarsCant>
                                  : null
                              }
                              {
                                modalArticle.item.split(' ')[0] === "Caja"
                                  ?  <StarsCant>+3<Star /></StarsCant>
                                  : null
                              }
                            </AddToCartButton>
                          </BorderContainerButton>
                        </ButtonContainer>
                      </>
              }
            </BuyContainer>
            {
              !userName
                &&  <UserWarning stuffing={modalArticle.stuffing}>
                      <AltRegisterLogin onClick={() => altRegisterLogin(
                        'logIn',
                        setOpenArticlesModal,
                        setOpenLoginModal,
                        setLoginRegisterElection)}>Inicia sesión </AltRegisterLogin>
                      o
                      <AltRegisterLogin onClick={() => altRegisterLogin(
                        'register',
                        setOpenArticlesModal,
                        setOpenLoginModal,
                        setLoginRegisterElection)}> Registrate </AltRegisterLogin>
                      para realizar una compra
                    </UserWarning>
            }
          </ItemContainer>
        </BorderContainer>
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
  background: rgba(52, 48, 41, 0.8);
`

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  height: 680px;
  width: 900px;
  background-color: #ebe9eb;
  border-radius: 30px;
  padding: 3px;
  @media only screen and (max-width: 1400px) {
    height: 95%;
  }
  @media only screen and (max-width: 991px) {
    width: 90%;
  }
`

const GlobalImage = styled.div`
  @media only screen and (max-width: 991px) {
    z-index: 3;
    position: absolute;
    height: 99.3%;
    width: 98.3%;
    border-radius: 30px;
    background-image: url(${props => props.img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #FFF;
  }
  ${props => props.globalImagenDisplay === "none" ? "display: none" : "display: inline-block"}
`

const CloseButtonContainer = styled.div`
  z-index: 2;
  display: none;
  position: absolute;
  top: 1.5%;
  right: 1.5%;
  width: 35px;
  height: 35px;
  @media only screen and (max-width: 991px) {
    top: 1.5%;
    right: 3%;
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: 280px) {
    top: 1.5%;
    right: 3%;
    button{
      font-size: 1.2rem;
    }
  }
  ${props => props.closeGlobalImage === "none" ? "display: none" : "display: inline-block"}
`

const CloseGlobalImage = styled(MdClose)`
  z-index: 10;
  position: absolute;
  right: 2%;
  top: 1%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: white;
  :hover{
    color: #AC8DAF;
  }
`

const BorderContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 30px;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

const CloseModalButton = styled(MdClose)`
  z-index: 1;
  position: absolute;
  top: 1.5%;
  right: 1.5%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :hover{
    color: #AC8DAF;
  }
  @media only screen and (max-width: 991px) {
    top: 1.5%;
    right: 3%;
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: 280px) {
    top: 1.5%;
    right: 3%;
    button{
      font-size: 1.3rem;
    }
  }
`

const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 10%;
  width: 90%;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: 'Festive', cursive;
  @media only screen and (max-width: 991px) {
    position: relative;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 0%;
    margin-left: 0%;
  }
`

const Imagen = styled.div`
  height: 94%;
  width: 450px;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  background-image: url(${props => props.img});
  background-position: ${props => props.name.split(' ')[0] === "Pantalon" ? "initial" : "center center"};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FFF;
  @media only screen and (max-width: 991px) {
    height: 100%;
    margin-top: 20px;
    margin-right: 25px;
    width: 75%;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 50%;
  @media only screen and (max-width: 991px) {
    justify-content: space-around;
    height: 50%;
    width: 90%;
    margin-left: 0%;
    margin-top: 0px;
  }
`

const BuyContainer = styled.span`
  position: relative;
  display: ${props => props.buyContainerEnableOrFlex === 'none' ? "none" : "flex"};
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 85%;
  @media only screen and (max-width: 991px) {
    height: 40px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`

const SizeContainer = styled.div `
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TContainer = styled.button`
  height: 50px;
  width: 110px;
  padding: 3px;
  background-color: #f5f5f5;
  border-radius: 50px;
  font-size: 1.1rem;
  border: none;
  box-shadow: 0px 0px 7px 5px #AC8DAF;

  :hover{
    transform: scale(1.05);
  }

  @media only screen and (max-width: 991px) {
    height: 35px;
    width: 100px;
    margin-right: 5px;
    :hover{
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 500px) {
    height: 35px;
    width: 80px;
    margin-right: 5px;
    :hover{
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 280px){
    font-size: 1rem;
  }
`

const redAlert = keyframes`
  0%{
    border: 2px solid #AC8DAF;
  }
  15%{
    border: 2px solid #AC8DAF;
  }
  25%{
    border: 2px solid rgb(150, 0, 0);
  }
  35%{
    border: 2px solid #AC8DAF;
  }
  65%{
    border: 2px solid #AC8DAF;
  }
  75%{
    border: 2px solid rgb(150, 0, 0);
  }
  85%{
    border: 2px solid #AC8DAF;
  }
  100%{
    border: 2px solid #AC8DAF;
  }
`
const sizeAlert = css`
  animation: ${redAlert};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

const BorderContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
  font-size: clamp(.8rem, 3vw, 1.1rem);
  cursor: pointer;

  ${props => props.sizeAlert === "on" && sizeAlert}
`

const sizeTwoChoicesUp = keyframes`
  0%{
    top: 30%;
  }
  100%{
    top: -190%;
  }
`
const sizeTwoChoicesUpMobile = keyframes`
  0%{
    top: -10%;
  }
  100%{
    top: -240%;
  }
`
const apearSizeChoiceTwoChoices = css`
  animation: ${sizeTwoChoicesUp};
  animation-duration: 1.4s;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 991px){
    animation: ${sizeTwoChoicesUpMobile};
    animation-duration: 1.4s;
    animation-fill-mode: forwards;
  }
`
const sizeTwoChoicesDown = keyframes`
  0%{
    top: -190%;
  }
  100%{
    top: 50%;
  }
`
const sizeTwoChoicesDownMobile = keyframes`
  0%{
    top: -240%;
  }
  100%{
    top: 50%;
  }
`
const disappearSizeTwoChoices = css`
  animation: ${sizeTwoChoicesDown};
  animation-duration: 1.4s;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 991px){
    animation: ${sizeTwoChoicesDownMobile};
    animation-duration: 1.4s;
    animation-fill-mode: forwards;
  }
`

const sizeSixChoicesUp = keyframes`
  0%{
    top: 30%;
  }
  5%{
    top: 30%;
  }
  90%{
    top: -520%;
  }
  100%{
    top: -520%;
  }
`

const sizeSixChoicesUpMobile = keyframes`
  0%{
    top: 50%;
  }
  5%{
    top: 50%;
  }
  90%{
    top: -500%;
  }
  100%{
    top: -500%;
  }
`

const apearSizeSixChoices = css`
  animation: ${sizeSixChoicesUp};
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 991px){
    animation: ${sizeSixChoicesUpMobile};
    animation-duration: 1.7s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`

const sizeSixChoicesDown = keyframes`
  0%{
    top: -520%;
  }
  5%{
    top: -520%;
  }
  100%{
    top: 100%;
  }
`

const sizeSixChoicesDownMobile = keyframes`
  0%{
    top: -500%;
  }
  5%{
    top: -500%;
  }
  100%{
    top: 100%;
  }
`

const disappearSizeSixChoices = css`
  animation: ${sizeSixChoicesDown};
  animation-duration: 1.7s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 991px){
    animation: ${sizeSixChoicesDownMobile};
    animation-duration: 1.7s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`

const sizeThreeChoicesUp = keyframes`
  0%{
    top: 30%;
  }
  100%{
    top: -280%;
  }
`

const apearSizeThreeChoices = css`
  animation: ${sizeThreeChoicesUp};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`

const sizeThreeChoicesDown = keyframes`
  0%{
    top: -280%;
  }
  5%{
    top: -280%;
  }
  100%{
    top: 100%;
  }
`

const disappearSizeThreeChoices = css`
  animation: ${sizeThreeChoicesDown};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`

const SizeApearContainer = styled.div`
  z-index: -1;
  position: absolute;
  width: 70px;
  /* border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%; */
  background-color: white;
  overflow-y: hidden;
  margin-left: 20px;
  cursor: pointer;
  
  h4{
    height: 40px;
    width: 100%;
    padding-top: 6px;
    text-align: center;
    border-top: 2px solid #AC8DAF;
    border-right: 2px solid #AC8DAF;
    border-left: 2px solid #AC8DAF;
    margin-bottom: 0px;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 991px){
    margin-left: 11px;
    width: 79px;

    h4{
      height: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-left: 10px;
    width: 60px;

    h4{
      font-size: 1rem;
    }
  }
  

  ${props => {
      if(props.sizeApearContainerStatus.cuello !== "none"){
        if(props.sizeApearContainerStatus.cuello === "off") return disappearSizeTwoChoices
        if(props.sizeApearContainerStatus.cuello === "on") return apearSizeChoiceTwoChoices
      }
      if(props.sizeApearContainerStatus.botitas !== "none"){
        if(props.sizeApearContainerStatus.botitas === "off") return disappearSizeSixChoices
        if(props.sizeApearContainerStatus.botitas === "on") return apearSizeSixChoices
      }
      if(props.sizeApearContainerStatus.pantalones !== "none"){
        if(props.sizeApearContainerStatus.pantalones === "off") return disappearSizeThreeChoices
        if(props.sizeApearContainerStatus.pantalones === "on") return apearSizeThreeChoices
      }
      if(props.sizeApearContainerStatus.batitas !== "none"){
        if(props.sizeApearContainerStatus.batitas === "off") return disappearSizeThreeChoices
        if(props.sizeApearContainerStatus.batitas === "on") return apearSizeThreeChoices
      }
      if(props.sizeApearContainerStatus.bombachudo !== "none"){
        if(props.sizeApearContainerStatus.bombachudo === "off") return disappearSizeTwoChoices
        if(props.sizeApearContainerStatus.bombachudo === "on") return apearSizeChoiceTwoChoices
      }
      if(props.sizeApearContainerStatus.gorro !== "none"){
        if(props.sizeApearContainerStatus.gorro === "off") return disappearSizeTwoChoices
        if(props.sizeApearContainerStatus.gorro === "on") return apearSizeChoiceTwoChoices
      }
    }
  }
`

const upAndDisapear = keyframes`
  0%{
    color: #70416D;
  }
  50%{
    color: #70416D;
  }
  100%{
    color: rgba(150, 100, 70, 0);
  }
`

const plusOneAnimation = css`
  animation: ${upAndDisapear};
  animation-duration: 2s;
  animation-timing-function: linear;
`

const PlusOne = styled.div`
  z-index: 1;
  position: absolute;
  right: ${props => props.cuelloGorroSizeChoice !== '?' ? "-4%" : "13%"};
  font-size: 1.3rem;
  color: rgba(150, 100, 70, 0);
  @media only screen and (max-width: 991px) {
    right: ${props => props.cuelloGorroSizeChoice !== '?' ? "-4%" : "7%"};
    bottom: ${props => props.cuelloGorroSizeChoice !== '?' ? "80%" : "25%"};
    margin-top: 10px;
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 280px) {
    right: ${props => props.cuelloGorroSizeChoice !== '?' ? "-4%" : "-2%"};
    margin-top: 10px;
    font-size: 1.1rem;
  }

  ${props => props.plusStatus === "on" && plusOneAnimation}
`

const StarsCant = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3%;
  color: #AC8DAF;
`

const Star = styled(AiFillStar)`
  height: 20px;
  width: 20px;
  color: #AC8DAF;
`

const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: auto;
  padding: 3px;
  background-color: #f5f5f5;
  border-radius: 50px;
  box-shadow: 0px 0px 7px 5px #AC8DAF;
  font-size: clamp(1rem, 4vw, 1.1rem);
  :hover{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 991px) {
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 300px) {
    width: 160px;
  }
`

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  width: 196px;
  border: none;
`

const UserWarning = styled.p`
  text-align: center;
  width: 90%;
  margin-bottom: 0%;
  font-size: clamp(.9rem, 4vw, 1.5rem);
  @media only screen and (max-width: 991px) {
    width: 100%;
    margin-top: 10px;
  }
`

const AltRegisterLogin = styled.span`
  color: #AC8DAF;
  cursor: pointer;
  :hover{
    border-bottom: 2px solid #AC8DAF;
  }
`

export { ArticlesModal }