import React from "react"
import styled from "styled-components"

const ItemInfo = ({ modalArticle }) =>{

  const numberChange = modalArticle.price === 140015001600 ? "1400 AR$ 1500 AR$ 1600" : undefined

  return(
    <MainContainer>
      <Flex>
        <VerticalLine />
        <InfoWordStyles>Precio</InfoWordStyles>
        <InfoStyles>AR$ {numberChange !== undefined ? numberChange : modalArticle.price}</InfoStyles>
        {modalArticle.size !== 'none' &&
          <>
            <InfoWordStyles>Medida</InfoWordStyles>
            <InfoStyles>{modalArticle.size}</InfoStyles>
          </>
        }
        <MaterialWord stuffing={modalArticle.stuffing}>Material</MaterialWord>
        <Material stuffing={modalArticle.stuffing}>{modalArticle.material}</Material>
        {modalArticle.stuffing !== 'none' &&
          <>
            <StuffingWord>Relleno</StuffingWord>
            <Stuffing>{modalArticle.stuffing}</Stuffing>
          </>
        }
      </Flex>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  overflow: hidden;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 8px #AC8DAF;
  background-color: white;
  font-size: clamp(.8rem, 4vw, 1.3rem);
  padding: 3px;
`

const Flex = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  border: 2px solid #AC8DAF;
  border-radius: 20px;
`

const VerticalLine = styled.div`
  position: absolute;
  height: 100%;
  margin-right: 6%;
  border: 1px solid #AC8DAF;
`

const InfoStyles = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 46%;
  margin-bottom: 0px;
  padding-right: 8%;
  border-bottom: 2px solid #AC8DAF;

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

const InfoWordStyles = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 54%;
  padding-right: 8%;
  margin-bottom: 0px;
  border-bottom: 2px solid #AC8DAF;

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

const MaterialWord = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 54%;
  padding-right: 8%;
  margin-bottom: 0px;
  border-bottom: ${props => props.stuffing !== 'none' ? '2px solid #AC8DAF' : null};

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

const Material = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 46%;
  padding-right: 8%;
  margin-bottom: 0px;
  border-bottom: ${props => props.stuffing !== 'none' ? '2px solid #AC8DAF' : null};

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

const StuffingWord = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 46%;
  margin-bottom: 0px;

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

const Stuffing = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 54%;
  margin-bottom: 0px;

  @media only screen and (max-width: 991px){
    min-height: auto;
  }
`

export { ItemInfo }