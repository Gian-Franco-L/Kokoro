import React from "react"
import styled from "styled-components"

const Searched = ({ items, itemsPrice}) => {

  return(
    <>
      <div>{items}</div>
      <div>{itemsPrice}</div>
    </>
  )
}

const SearchedItem = styled.div`
  height: 100px;
  width: 30%;
  background-color: white;
  border-radius: 10px;
  margin-left: 40.4%;
`
export { Searched }