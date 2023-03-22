import React, { useContext } from "react"
import { AppContext } from "../../../Context/AppContext"
import styled from "styled-components"
import outOfCart from "./outOfCart"
import { MdClose } from "react-icons/md";


const ItemOnCart = ({ item }) =>{
  const {
    setItemToDataBase,
    articlesCart,
    setArticlesCart
  } = useContext(AppContext)
  return(
    <>
      <Line />
      <NameCantKick>
        <i>{item.name}</i>
        <div>{item.amount>1 ? "x" + item.amount : null}</div>
        <Kick>
          {item.name.length>0 ? <button onClick={() => outOfCart(item.name, articlesCart, setArticlesCart, setItemToDataBase)}><Close /></button> : null}
        </Kick>
      </NameCantKick>
      <Price>Precio: AR$ {item.price}</Price>
    </>
  )
}

const Close = styled(MdClose)`
  height: 25px;
  width: 25px;
  :hover{
    color: #ab6f4a;
  }
`

const NameCantKick = styled.div`
  position: relative;
  display: flex;
  max-width: 90%;
  left: 7%;
  margin-top: 5%;
  font-size: 1.1rem;

  i{
    max-width: 70%;
  }
  div{
    margin-left: 5%;
  }
`
const Line = styled.div`
  width: 90%;
  border-top: 1px solid #AD8B73;
  margin-left: 5%;
`
const Kick = styled.div`
  button{
    border: none;
    position: absolute;
    height: 20px;
    width: 20px;
    right: 5%;
    background-color: rgba(0, 0, 0, 0);
  }
`

const Price = styled.div`
  max-width: 87%;
  margin-top: 2%;
  padding-bottom: 3%;
  margin-left: 7%;
  
`

export { ItemOnCart }