import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md';
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext';
import { AiFillStar } from "react-icons/ai"

const DiscountModal = () =>{

  const {
    setOnOffDiscountModal
  } = useContext(AppContext)
  
  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton onClick={() => setOnOffDiscountModal("Off")} />
        <BorderContainer>
          <DiscountTittle>Descuento</DiscountTittle>
          <DiscountExplication>
            Gana <Star /> comprando artículos para niños para obtener un descuento de $1200 en tu compra. El descuento será visible en el carrito de compras.
          </DiscountExplication>
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
  background-color: #ebe9eb;
  border-radius: 30px;
  padding: 3px;
  height: 45vh;
  width: 85%;
`

const BorderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  top: 3%;
  right: 3%;
  width: 35px;
  height: 35px;
  cursor: pointer;
`

const DiscountTittle = styled.h4`
  height: 65px;
  width: 100%;
  text-align: center;
  padding-top: 3%;
  font-size: 3rem;
  font-family: 'Festive', cursive;
  border-bottom: 2px solid #AC8DAF;
`

const DiscountExplication = styled.h5`
  text-align: center;
  font-size: clamp(1.3rem, 6.5vw, 2rem);
  padding: 2%;
`

const Star = styled(AiFillStar)`
  height: 23px;
  width: 23px;
  color: #AC8DAF;
`

export { DiscountModal }