import React from "react"
import styled from "styled-components"
import "../CSS/Animation.css"

const Header = () =>{
    return(
        <Navbar>
        	<Name>Monica Szeki</Name>
          <Buttons>
						{/*
						<Link to="/">Home</Link>
						<Link to="/sobremi">Sobre mí</Link>
						<Link to="/contacto">Contacto</Link>
						*/}
          </Buttons>
        </Navbar>
    )
}

const Navbar = styled.div`
	display: flex;
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
	width: 650px;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	color: white;
	outline: none;
	text-decoration: none;
`

export { Header }