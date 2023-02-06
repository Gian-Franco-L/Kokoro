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
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(4, totalArticles, setTotalArticles, setFilterStatus)} defaultChecked/>
        <div>
          <span>
            Mas nuevo a mas viejo
          </span>
        </div>
      </article>
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(3, totalArticles, setTotalArticles, setFilterStatus)}/>
        <div>
          <span>
            Mas viejo a mas nuevo
          </span>
        </div>
      </article>
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(1, totalArticles, setTotalArticles, setFilterStatus)}/>
        <div>
          <span>
            Precio mayor a menor
          </span>
        </div>
      </article>
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(2, totalArticles, setTotalArticles, setFilterStatus)}/>
        <div>
          <span>
            menor a mayor
          </span>
        </div>
      </article>
    </FilterItems>
  )
}


const FilterItems = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin-left: 4.5%;
  margin-bottom: 2%;

  article{
    position: relative;
    height: 60px;
    width: 13%;
    float: left;
    border: none;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 60px;
    box-shadow: 1px 1px 4px 1px rgb(125, 125, 125);
  }

  article div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
  }

  article input {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    border-radius: 60px;
  }
  
  input[type=radio]:checked ~ div {
    box-shadow: 1px 1px 5px 3px #e3c69a;
  }
`

export { Filter }