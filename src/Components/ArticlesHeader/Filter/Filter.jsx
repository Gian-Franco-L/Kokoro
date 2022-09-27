import React from "react"
import styled from "styled-components"

const Filter = ({
    totalArticles,
    setTotalArticles
}) => {

  function sinFiltro (){
    setTotalArticles(totalArticles.sort((a, b) => a.id - b.id))
  }
  function mayorAMenor(){
    const asd = totalArticles.sort((a, b) => b.Price - a.Price)
    setTotalArticles(asd)
  }
  function MenorAMayor(){
    setTotalArticles(totalArticles.sort((a, b) => a.Price - b.Price))
  }
  function viejoANuevo(){
    setTotalArticles(totalArticles.sort((a, b) => a.Date - b.Date))
  }
  function nuevoAViejo(){
    setTotalArticles(totalArticles.sort((a, b) => b.Date - a.Date))
  }

  return(
    <FilterItems>
      {/* <label htmlFor="filter"></label>
      <Select
        placeholder="Filtrar por..."
        defaultValue=""
        classNamePrefix="select"
        name="type"
        options={optionValue}
        onChange={filterPriceTime}
      /> */}
      <button onClick={sinFiltro}>Sin Filtro</button>
      <button onClick={mayorAMenor}>Precio mayor a menor</button>
      <button onClick={MenorAMayor}>Precio menor a mayor</button>
      <button onClick={viejoANuevo}>Mas viejo a mas nuevo</button>
      <button onClick={nuevoAViejo}>Mas nuevo a mas viejo</button>
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