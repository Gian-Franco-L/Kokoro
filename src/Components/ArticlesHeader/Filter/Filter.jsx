import React, { useContext } from "react"
import styled from "styled-components"
import filterFuncion from "./filterFuncion"
import { AppContext } from "../../../Context/AppContext"

const Filter = () => {
  const {
    totalArticles,
    setTotalArticles,
    setFilterStatus
  } = useContext(AppContext)
  return(
    <FilterItems>
      <button onClick={() =>filterFuncion(0, totalArticles, setTotalArticles, setFilterStatus)}>
        Sin Filtro
      </button>
      <button onClick={() =>filterFuncion(1, totalArticles, setTotalArticles, setFilterStatus)}>
        Precio mayor a menor
      </button>
      <button onClick={() =>filterFuncion(2, totalArticles, setTotalArticles, setFilterStatus)}>
        Precio menor a mayor
      </button>
      <button onClick={() =>filterFuncion(3, totalArticles, setTotalArticles, setFilterStatus)}>
        Mas viejo a mas nuevo
      </button>
      <button onClick={() =>filterFuncion(4, totalArticles, setTotalArticles, setFilterStatus)}>
        Mas nuevo a mas viejo
      </button>
    </FilterItems>
  )
}


const FilterItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  button{
    width: 50%;
    margin-left: 25%;
  }
`

export { Filter }