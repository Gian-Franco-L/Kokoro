import React, { useEffect } from "react"
import styled from "styled-components"
import { totalCount } from "../ShoppingCart/totalCount"
import purchaseService from "../../Services/purchase"
import { MdClose } from "react-icons/md";

const PurchaseModal = ({
    setOpenPurchaseModal,
    name,
    email,
    articlesCart,
    wppLink,
    setWppLink,
    token,
    setItemCartAux,
    setArticlesCart,
    setItemToDataBase
  }) =>{

  useEffect(() =>{
    let auxWppLink = wppLink
    let articlesCartNames = []
    let auxName = name.split(' ')
    const total = totalCount(articlesCart)

    articlesCart.length > 0 && articlesCart.map(item =>(
      articlesCartNames.push(item.name)
    ))

    for(let i=0; i<auxName.length; i++){
      auxWppLink = auxWppLink + "%20" + auxName[i]
    }

    auxWppLink = auxWppLink + ",%20acabo%20de%20comprar"

    articlesCartNames.forEach(element => {
      let splitElement = element.split(' ')
      for(let i=0; i<splitElement.length; i++){
        auxWppLink = auxWppLink + "%20" + splitElement[i]
      }
      auxWppLink = auxWppLink + ","
    })
    
    auxWppLink = auxWppLink + `%20y%20el%20total%20es%20Ar$${total}`

    setWppLink(auxWppLink)
  }, [])

  async function finishPurchase(){
    const purchase = {
      info: articlesCart.map(item => item),
      total: totalCount(articlesCart),
      email: email
    }

    setItemCartAux([])
    setArticlesCart([])
    setItemToDataBase([])
    await purchaseService.createPurchase(purchase, {token})
  }

  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton onClick={() => setOpenPurchaseModal(false)} />
        <BorderContainer>
          <Tittle>Pasos para finalizar la compra</Tittle>
          <Point>1. Transferencia por MercadoPago mediante nuestro alias es la única forma de pago por el momento.</Point>
          <Point>2. Tener el mismo nombre de cuenta de MercadoPago que el nombre dé cuenta de perfil, aunque no es necesario sí que hará que el proceso sea más rápido. (podés cambiarlo en tu perfil)</Point>
          <Point>3. La transferencia de dinero tiene que ser exacta, esto nos ayudara a la hora de identificar tu pedido.</Point>
          <Point>4. Al finalizar se guardará un registro de tu compra en tu perfil, podés tomarte tu tiempo para hacer la transferencia, pero no es hasta el momento de realizarla que se iniciara con tu pedido.</Point>
          <AliasTittle>5. Nuestro alias:<Alias>monideco</Alias></AliasTittle>
          <Point>6. Mandanos un mensaje automático a nuestro WhatsApp antes de finalizar.</Point>
          <a href={wppLink} Target="_blank" onClick={() => setOpenPurchaseModal(false)}><BorderContainerButton onClick={finishPurchase}><Finish>Mandar mensaje y finalizar</Finish></BorderContainerButton></a>
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
  background: rgba(32, 35, 51, 0.8);
`

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  height: 85vh;
  width: 550px;
  background-color: #ebe9eb;
  border-radius: 30px;
  padding: 3px;
  @media only screen and (max-width: 991px){
    width: 90%;
    height: 95vh;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin-bottom: 2%;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    text-decoration: none;
    height: 50px;
    width: 230px;
    margin-left: calc(50% - 115px);
    :hover{
      transform: scale(1.05);
    }
    @media only screen and (max-width: 991px){
      height: 40px;
      width: 200px;
      margin-left: calc(50% - 100px);
    }
    @media only screen and (max-height: 550px) {
      height: 35px;
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
  border: 2px solid #CEAB93;
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
    color: #ab6f4a;
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
  @media only screen and (max-width: 991px){
  }
  @media only screen and (max-height: 550px) {
    font-size: 0.8rem;
  }
`

const AliasTittle = styled.h5`
  display: flex;
  margin-left: 5%;
  font-size: clamp(.1rem, 4.3vw, 1.25rem);
`

const Alias = styled.div`
  width: 100px;
  text-align: center;
  background-color: white;
  color: #9a6a48;
  margin-left: 10px;
  border-radius: 20px;
`

const BorderContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
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
  :hover{
    transform: scale(1.05)
  }
  @media only screen and (max-height: 550px){
    font-size: .9rem;
  }
`

export { PurchaseModal }