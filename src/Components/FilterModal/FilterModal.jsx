import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext'
import filterFuncion from '../ArticlesContainer/Filter/Functions/filterFuncion'

const FilterModal = () =>{

  const {
    articleChoice,
    setOnOffFilterModal,
    setArticleChoice,
    setArticlesCount,
    setPageCount,
  } = useContext(AppContext)
  
  return(
    <Overlay>
      <ModalContainer>
        <VerticalLine />
        <CloseModalButton onClick={() => setOnOffFilterModal("Off")} />
        <BorderContainer>
          <DiscountTittle>Categorias</DiscountTittle>
          <Buttons articleChoice={articleChoice}>
            <button id="HogarWord" onClick={() =>(filterFuncion(setArticleChoice, setArticlesCount, setPageCount, "hogar"), setOnOffFilterModal("Off"))}>
              Hogar
            </button>
            <button id="NiñosWord" onClick={() =>(filterFuncion(setArticleChoice, setArticlesCount, setPageCount, "niños"), setOnOffFilterModal("Off"))}>
              Niños
            </button>
          </Buttons>
        </BorderContainer>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  z-index: 1031;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background: rgba(52, 48, 41, 0.8);
`

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  background-color: #ebe9eb;
  border-radius: 30px;
  padding: 3px;
  width: 80%;
`

const VerticalLine = styled.div`
  position: absolute;
  height: 59%;
  top: 39%;
  left: 50%;
  border: 1px solid #AC8DAF;

  @media only screen and (max-width: 991px){
    height: 41%;
    top: 56%;
  }
`

const BorderContainer = styled.div`
  display: flex;
  justify-content: center;
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
  height: 35px;
  width: 35px;
  top: 3%;
  right: 3%;
  cursor: pointer;

  @media only screen and (max-width: 991px) {
    height: 30px;
    width: 30px;
    top: 4%;
    right: 4%;
  }
`

const DiscountTittle = styled.h4`
  height: 65px;
  width: 100%;
  text-align: center;
  padding-top: 3%;
  font-size: 3rem;
  font-family: 'Festive', cursive;
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 35%;
  font-size: clamp(1rem, 5vw, 1.7rem);

  #HogarWord{
    height: 60px;
    color: ${props => props.articleChoice === "hogar" ? "#AC8DAF" : "#212529"};
    border-top: 2px solid #AC8DAF;
  }
  #NiñosWord{
    height: 60px;
    color: ${props => props.articleChoice === "niños" ? "#AC8DAF" : "#212529"};
    border-top: 2px solid #AC8DAF;
  }
  
  button{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90%;
    width: 50%;
    border: none;
    background-color: white;
    @media only screen and (max-width: 991px){
      height: auto;
      background-color: transparent;
    }
  }
  @media only screen and (max-width: 991px){
    width: 100%;
    height: 70%;
    font-size: 1.5rem;
  }
`

export { FilterModal }