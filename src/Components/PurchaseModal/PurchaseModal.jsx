import React, { useEffect } from "react"
import styled from "styled-components"
import { totalCount } from "../ShoppingCart/totalCount"
import purchaseService from "../../Services/purchase"

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
        <CloseModalButton>
          <button onClick={() => setOpenPurchaseModal(false)}>X</button>
        </CloseModalButton>
        <Tittle>Pasos para finalizar la compra</Tittle>
        <Point>1. Transferencia por MercadoPago mediante nuestro alias es la unica forma de pago por el momento.</Point>
        <Point>2. Tener el mismo nombre de cuenta de MercadoPago que el nombre de cuenta de perfil, aunque no es necesario si que hara que el proceso sea mas rapido. (podes cambiarlo en tu perfil)</Point>
        <Point>3. La transferencia de dinero tiene que ser exacta, esto nos ayudara a la hora de identificar tu pedido.</Point>
        <Point>4. Al finalizar se guardara un registro de tu compra en tu perfil, podes tomarte tu tiempo para hacer la transferencia pero no es hasta el momento de realizarla que se iniciara con tu pedido.</Point>
        <AliasTittle>5. Nuestro alias:<Alias>monideco</Alias></AliasTittle>
        <Point>6. Entregas a combinar con el vendedor por whatsApp.</Point>
        <Point>7. Mandanos un mensaje automatico a nuestro WhatsApp antes de finalizar.</Point>
        <a href={wppLink} target="_blank" onClick={() => setOpenPurchaseModal(false)}><Finish onClick={finishPurchase}>Mandar mensaje y finalizar</Finish></a>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  z-index: 1030;
  position: fixed;
  display: flex;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  justify-content: center;
  align-items: center;
  background: rgba(32, 35, 51, 0.9);
`

const ModalContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 550px;
  border-radius: 20px;
  background-color: #ebe9eb;
  box-shadow: 0px 0px 2px 1px #ab6f4a;
`

const CloseModalButton = styled.div`
  position: absolute;
  top: 0.5%;
  right: 1%;
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.3rem;
    :hover{
      color: #ab6f4a;
    }
  }
`

const Tittle = styled.h2`
  width: 100%;
  margin-top: 40px;
  text-align: center;
`

const Point = styled.h5`
  width: 90%;
  margin-left: 5%;
  margin-top: 7%;
`

const AliasTittle = styled.h5`
  display: flex;
  margin-left: 5%;
  margin-top: 7%;
`

const Alias = styled.div`
  width: 110px;
  text-align: center;
  background-color: white;
  color: #9a6a48;
  margin-left: 10px;
`

const Wpp = styled.button`
  border: none;
  margin-left: 20px;
  box-shadow: 0px 0px 3px 2px rgb(154, 154, 154);
  border-radius: 30px;
  margin-left: 35.5%;
  :hover{
    transform: scale(1.1)
  }
`
const Finish = styled.button`
  height: 45px;
  width: 230px;
  background-color: white;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
  margin-left: calc(50% - 115px);
  margin-top: 6%;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px rgb(125, 125, 125);
  :hover{
    transform: scale(1.05)
  }
`
export { PurchaseModal }