import React from "react"
import MyLoader from "../../../Loader/MyLoader"
import styled from "styled-components"

const Skeletons = () => {
 return(
    <ErrorContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
      <LoaderContainer><MyLoader /></LoaderContainer>
    </ErrorContainer>
 )
}

const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 365px;
  width: 232px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 2%;
  padding: 3px;
  @media only screen and (max-width: 584px){
    width: 250px;
  }
`

export { Skeletons }