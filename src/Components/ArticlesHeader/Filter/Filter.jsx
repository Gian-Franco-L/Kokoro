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
        <input type="radio" name="filter" onClick={() =>filterFuncion(0, totalArticles, setTotalArticles, setFilterStatus)} defaultChecked/>
        <div>
          <span>
            Sin filtro
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
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(3, totalArticles, setTotalArticles, setFilterStatus)}/>
        <div>
          <span>
            Mas viejo a mas nuevo
          </span>
        </div>
      </article>
      <article>
        <input type="radio" name="filter" onClick={() =>filterFuncion(4, totalArticles, setTotalArticles, setFilterStatus)}/>
        <div>
          <span>
            Mas nuevo a mas viejo
          </span>
        </div>
      </article>
    </FilterItems>
  )
}


const FilterItems = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10%;

  article{
    position: relative;
    height: 60px;
    width: 70%;
    margin-left: 25%;
    float: left;
    border: none;
    box-sizing: border-box;
    background-color: #f5f5f5;
    border-radius: 60px;
    box-shadow: 2px 2px 10px 0px #d7b069;
    border: 2px solid #E3CAA5;
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
    background: linear-gradient(90deg, #FFFBE9 20%, #e3c69a 140%) 0px 0px;
  }
`

export { Filter }