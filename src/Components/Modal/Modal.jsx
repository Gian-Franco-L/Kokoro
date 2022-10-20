import React from "react"
import styled from "styled-components"

const Modal = ({ setOpenModal, modalArticle }) =>{

  function changeModalState(){
    setOpenModal(false)
  }

  return(
    <Overlay>
      <ModalContainer>
        <CloseModalButton>
          <button onClick={changeModalState}>X</button>
        </CloseModalButton>
        {modalArticle.item}
        {modalArticle.itemsPrice}
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  z-index: 1;
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
  position: relative;
  height: 60%;
  width: 50%;
  margin-top: 5%;
  background-color: white;
`

const CloseModalButton = styled.div`
  position: absolute;
  right: 0;
`

export { Modal }