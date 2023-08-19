import React from "react"
import styled from "styled-components"

const UserNotFound = () => {
  return(
    <BlackBackground>
      <Error>
        <BorderContainerError>
          <h3>Aviso</h3>
          <h5>No hay sesión iniciada</h5>
          <a href="https://monicadeco.com/#">
            <BorderContainerButton>
              <Finish>Volver</Finish>
            </BorderContainerButton>
          </a>
        </BorderContainerError>
      </Error>
    </BlackBackground>
  )
}

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

const BorderContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 50px;
`

const BlackBackground = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(52, 48, 41, 0.8);

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
    height: 40px;
    width: 150px;
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

const BorderContainerError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 2px solid #AC8DAF;
  border-radius: 20px;

  h3{
    font-family: 'Festive', cursive;
    font-size: clamp(5rem, 12vw, 7rem);
  }
  h5{
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
`
const Error = styled.div`
  position: sticky;
  top: 44px;
  height: 45vh;
  width: 35%;
  background-color: white;
  border-radius: 20px;
  padding: 2px;
  @media only screen and (max-width: 820px){
    position: relative;
    top: -10px;
    height: 40vh;
    width: 90%;
  }
`

export { UserNotFound }