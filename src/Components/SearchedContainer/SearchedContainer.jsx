import React, { useEffect } from "react"
import { Searched } from "./Searched/Searched"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

const SearchedContainer = ({searchedArticles, openLoginModal, enableDisableCollapse, acountRef, cartButtonRef}) => {

  useEffect(()=>{
    if(searchedArticles){
      // enableDisableCollapse.current.style.display = "inline"
      if(acountRef.current){
        acountRef.current.setAttribute("disabled", "");
        acountRef.current.style.opacity = "0.5"
      }
      // cartButtonRef.current.setAttribute("disabled", "");
      // cartButtonRef.current.style.opacity = "0.5"
    }else if(searchedArticles === null){
      // enableDisableCollapse.current.style.display = "none"
      if(acountRef.current){
        acountRef.current.removeAttribute("disabled");
        acountRef.current.style.opacity = "1"
      }
      // cartButtonRef.current.removeAttribute("disabled");
      // cartButtonRef.current.style.opacity = "1"
    }
  }, [searchedArticles])
  
  return(
    <MainContainter>
      {
        (searchedArticles && !openLoginModal) &&
          <>
            {searchedArticles.length > 0
              ?	searchedArticles.map(item =>(
                  <Searched 
                  items={item.Name}
                  itemsPrice={item.Price}
                  size={item.Size}
                  material={item.Material}
                  stuffing={item.Stuffing}
                  choice={item.Choice}
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
  top: 7.3%;
  /* left: 2%; */
  left: 20%;
  /* width: 24%; */
  width: 430px;
  max-height: 57%;
  background-color: white;
  margin-left: 30.4%;
  overflow-y: scroll;
  border-bottom: 2px solid #AD8B73;
  border-right: 1px solid #AD8B73;
  border-left: 1px solid #AD8B73;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    width: 101%;
    left: -31%;
    /* top: 26.7%; */
    top: 16%;
    border: none;
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