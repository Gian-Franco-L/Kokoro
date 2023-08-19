import React from "react"
import styled from "styled-components"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () =>{
  return(
    <>
        <CopyrightContainer>
          <Copyright>
            <CopyCircle /> Copyright Monicadeco - 2023
          </Copyright>
          <Copyright>
            Creado por &nbsp;<a href="https://wa.me/541558305208" target="_blank">Gianfranco Lombardini</a>.
          </Copyright>
        </CopyrightContainer>
        <UserDefense>
          Defensa de los/as consumidores. Para reclamos ingrese &nbsp;<a href="https://autogestion.produccion.gob.ar/consumidores" target="_blank">aquí</a>.
        </UserDefense>
    </>
  )
}

const CopyrightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  color: #424242;
  box-shadow: 0px 0px 10px 3px #AC8DAF;
  font-size: clamp(.6rem, 2vw, 1rem);
`

const UserDefense = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1%;
  width: 100%;
  background-color: white;
  color: #424242;
  font-size: clamp(.6rem, 2vw, 1rem);

  a{
    color: #AC8DAF;
  }
`

const CopyCircle = styled(AiOutlineCopyrightCircle)`
  height: 20px;
  width: 20px;
  color: #AC8DAF;

  @media only screen and (max-width: 991px) {
    height: 15px;
    width: 15px;
  }
`

const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  align-items: center;
  padding-top: 1%;

  a{
    color: #AC8DAF;
  }
`

export { Footer }