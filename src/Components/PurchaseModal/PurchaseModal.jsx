import React, { useContext } from "react"
import styled from "styled-components"
import { totalCount } from "../ShoppingCart/Function/totalCount"
import purchaseService from "../../Services/purchase"
import { MdClose } from "react-icons/md";
import { openCloseCart } from "../Header/CarButton/Functions/CarButtonFunctions"
import { finishPurchase, closeModalButton } from "./Functions/PurchaseModalFunctions"
import { AppContext } from "../../Context/AppContext";
import { useCreateMessage } from "../../Hooks/useCreateMessage"

const PurchaseModal = () =>{
  const {
    articlesCart,
    setArticlesCart,
    cartSwitch,
    setCartSwitch,
    itemCartAux,
    setItemCartAux,
    setItemToDataBase,
    onOffCartButton,
    setOnOffCartButton,
    setCartFilledOrNot,
    email,
    token,
    loginRegisterSwitch,
    setOpenPurchaseModal,
    wppLink,
    setWppLink,
    discountCant,
    setDiscountCant,
    setEnableDisableCollapse,
    setSearchEnableDisable,
    setBuyButtonEnableDisable,
    setProfileLogOutDisableOrFlex,
    setShopingCartStatus,
    setProfileLoginButtonStatusOpacityDisplay
  } = useContext(AppContext)

  const body = document.getElementById("body")
  useCreateMessage()

  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton onClick={() => closeModalButton(body, setOpenPurchaseModal, setWppLink)} />
        <BorderContainer>
          <Tittle>Pasos para finalizar la compra</Tittle>
          <Point>1. Si es pago en efectivo, a convenir con el vendedor.</Point>
          <Point>2. Si es pago por Mercado Pago, la transferencia de dinero tiene que ser exacta, esto nos ayudara a la hora de identificar tu pedido.</Point>
          <Point>3. Tener el mismo nombre de cuenta de Mercado Pago que el nombre dé cuenta de perfil, aunque no es necesario, sí que hará que el proceso sea más rápido. (podés cambiarlo en tu perfil)</Point>
          <Point>4. Al finalizar se guardará un registro de tu compra en tu perfil, podés tomarte tu tiempo para hacer la transferencia, pero no es hasta el momento de realizarla que se iniciara con tu pedido.</Point>
          <AliasTittle>5. Nuestro alias:<Alias>monica.decoracion</Alias></AliasTittle>
          <Point>6. Mandanos un mensaje automático a nuestro WhatsApp antes de finalizar.</Point>
          <a href={wppLink} target="_blank" onClick={() => {setOpenPurchaseModal(false); finishPurchase(
              articlesCart,
              totalCount,
              discountCant,
              email,
              body,
              purchaseService,
              token,
              openCloseCart,
              setShopingCartStatus,
              cartSwitch,
              setCartSwitch,
              setArticlesCart,
              itemCartAux,
              setItemCartAux,
              onOffCartButton,
              setOnOffCartButton,
              setEnableDisableCollapse,
              loginRegisterSwitch,
              setProfileLoginButtonStatusOpacityDisplay,
              setSearchEnableDisable,
              setBuyButtonEnableDisable,
              setProfileLogOutDisableOrFlex,
              setDiscountCant,
              setItemToDataBase,
              setCartFilledOrNot,
              setWppLink)}}>
            <BorderContainerButton>
              <Finish>Mandar mensaje y finalizar</Finish>
            </BorderContainerButton>
          </a>
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
  position: absolute;
  display: flex;
  height: 810px;
  width: 550px;
  background-color: #ebe9eb;
  border-radius: 30px;
  padding: 3px;
  @media only screen and (max-width: 991px){
    width: 90%;
    height: 90%;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin-bottom: 2%;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 5px #AC8DAF;
    text-decoration: none;
    height: 50px;
    width: 230px;
    margin-left: calc(50% - 115px);
    :hover{
      transform: scale(1.05);
    }
    @media only screen and (max-width: 991px){
      height: 35px;
      width: 200px;
      margin-left: 0%;
    }
    @media only screen and (max-height: 550px) {
      height: 30px;
      font-size: .8rem;
    }
  }
`

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    right: 3%;
    width: 30px;
    height: 30px;
  }

  @media only screen and (max-width: 500px) {
    top: 2%;
    right: 3%;
    width: 25px;
    height: 25px;
  }

  @media only screen and (max-width: 280px) {
    top: 1.5%;
    right: 3%;
  }
`

const Tittle = styled.h2`
  width: 100%;
  margin-top: 40px;
  text-align: center;
  font-size: clamp(2rem, 7vw, 3rem);
  font-family: 'Festive', cursive;
  @media only screen and (max-width: 991px){
    margin-top: 25px;
  }
  @media only screen and (max-height: 550px) {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`

const Point = styled.h5`
  width: 90%;
  margin-left: 5%;
  font-size: clamp(.1rem, 4.3vw, 1.25rem);
  @media only screen and (max-height: 550px) {
    font-size: 0.8rem;
  }
`

const AliasTittle = styled.h5`
  display: flex;
  width: 90%;
  margin-left: 5%;
  font-size: clamp(.1rem, 4.3vw, 1.25rem);
`

const Alias = styled.div`
  text-align: center;
  padding-left: 1%;
  padding-right: 1%;
  margin-left: 10px;
  background-color: white;
  color: #70416D;
  border-radius: 20px;
  user-select: all;
`

const BorderContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
`

const Finish = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: clamp(.9rem, 1.45vw, 1rem);
  border: none;
  cursor: pointer;
  background-color: transparent;
  @media only screen and (max-height: 550px){
    font-size: .9rem;
  }
`

export { PurchaseModal }