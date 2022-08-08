import React, { useContext } from "react"
import styled from "styled-components"
import Select from "react-select"
import { AppContext } from "../../Context/AppContext"

const Filter = () => {
  const {
    setPriceTimeChoice
  } = useContext(AppContext)

  const optionValue= [
    {value: "none", label: "Sin filtro"},
    {value: ">$", label: "Precio mayor a menor"},
    {value: "<$", label: "Precio menor a mayor"},
    {value: ">time", label: "Mas viejo a mas nuevo"},
    {value: "<time", label: "Mas nuevo a mas viejo"}
  ]

  const filterPriceTime = (filterChoice) =>{
    setPriceTimeChoice(filterChoice.value)
  }

  return(
    <FilterItems>
      <label htmlFor="filter"></label>
      <Select
        placeholder="Filtrar por..."
        defaultValue=""
        classNamePrefix="select"
        name="type"
        options={optionValue}
        onChange={filterPriceTime}
      />
    </FilterItems>
  )
}


const FilterItems = styled.div`
  position: absolute;
  left: 30%;
  width: 200px;
`

export default Filter