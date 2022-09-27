import React from "react"
import { CarButton } from "./CarButton/CarButton";
import styled from "styled-components"
import "../../CSS/Animation.css"


const Header = ({ showCart }) =>{
    return(
        <Navbar>
        	<Name>Monica Szeki</Name>
          <Buttons>
						<CarButton showCart={showCart} />
          </Buttons>
        </Navbar>
    )
}

const Navbar = styled.div`
	z-index: 100;
	display: flex;
	position: fixed;
	top: 0;
	height: 70px;
	width: 100%;
	background-color: black;
	color: white;
	justify-content: space-between;	
`

const Name = styled.div`
	font-family: 'Architects Daughter';
	font-size: 50px;
	padding-left: 50px;
	padding-top: 5px;
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	outline: none;
	text-decoration: none;
`

export { Header }