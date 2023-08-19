import React, { useEffect, useContext } from "react"
import { Searched } from "./Searched/Searched"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { AppContext } from "../../Context/AppContext"
import { useActiveDisablecollapseButton } from "../../Hooks/useActiveDisablecollapseButton"

const SearchedContainer = () => {

  const {
    cartSwitch,
    searchedArticles,
    openLoginModal,
    setEnableDisableCollapse,
    setCartButtonEnableDisable,
    setProfileLogOutDisableOrFlex,
    setProfileLoginButtonStatusOpacityDisplay
  } = useContext(AppContext)

  useActiveDisablecollapseButton({ setEnableDisableCollapse, setProfileLoginButtonStatusOpacityDisplay, setCartButtonEnableDisable, setProfileLogOutDisableOrFlex, searchedArticles })

  return(
    <MainContainter cartSwitch={cartSwitch}>
      {
        (searchedArticles && !openLoginModal) &&
          <>
            {searchedArticles.length > 0
              ?	searchedArticles.map(item =>(
                  <Searched 
                  items={item.Name}
                  itemsPrice={item.Price}
                  date={item.Date}
                  size={item.Size}
                  material={item.Material}
                  stuffing={item.Stuffing}
                  type={item.Type}
                  status={item.Status}
                  img={item.Img}
                  key={uuidv4()}
                  />
                ))
              : <NoResult>No hay resultados para su busqueda</NoResult>
            }
          </>
			}
    </MainContainter>
  )
}

const MainContainter = styled.div`
  z-index: 2;
  position: fixed;
  top: 9%;
  width: 24%;
  max-height: 57%;
  background-color: white;
  margin-left: 30.4%;
  overflow-y: scroll;
  border-right: 2px solid #AC8DAF;
  border-left: 2px solid #AC8DAF;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1515px) {
    left: 5%;
  }
  @media only screen and (max-width: 1320px) {
    left: 7%;
  }
  @media only screen and (max-width: 991px) {
    width: 101%;
    left: -31%;
    top: 150px;
    max-height: 75%;
    border: none;
  }
  @media only screen and (max-height: 550px) {
    max-height: 65%;
  }
`

const NoResult = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
  width: 97%;
  background-color: white;
  border-radius: 10px;
	font-size: 1.1rem;
`

export { SearchedContainer }