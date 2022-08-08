import React, { useRef } from "react"
import styled from "styled-components"
import { ShowChoice } from "../ShowChoice/ShowChoice"
import disabledItems from "./disabledItems"
import '../../CSS/Animation.css';

const Articles = () =>{
    const tipes = useRef(null)
    const articulos = useRef(null)

    return(
      <MainContainer>
      <ArticleTipes ref={tipes}>
        <Article onClick={() =>disabledItems(tipes, articulos)}>Primero</Article>
        <Article>Segundo</Article>
        <Article>Tercero</Article>
        <Article>Cuarto</Article>
        <Article>Quinto</Article>
        <Article>Sexto</Article>
      </ArticleTipes>
      <ShowChoice
      articulos={articulos}
      tipes={tipes}
      />
      </MainContainer>
    )
}

const MainContainer= styled.div`
  max-width: 100%;
`
const ArticleTipes = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Article = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  margin: 70px 50px 50px 50px;
`

export { Articles }