import React from "react"
import styled from "styled-components"
import { CarButton } from "./CarButton/CarButton";
import { Login	} from "./Login/Login"
import { Search	} from "./Search/Search"
import { Searched } from "./Searched/Searched"
import "../../CSS/react-icons.css"


const Header = ({ showCart, searchedArticles }) =>{
    return(
			<>
        <Navbar>
        	<Name>Monica Szeki</Name>
					<Search />
					<SearchedContainer>
						{searchedArticles 
							?	searchedArticles.map(item =>(
									<Searched 
										items={item.Name}
										itemsPrice={item.Price}
										key={item.Price}
									/>
								))
							: null
						}
					</SearchedContainer>
					
          <Button>
						<CarButton
							showCart={showCart}
						/>
          </Button>
					<Button>
						<Login />
					</Button>
        </Navbar>
			</>
    )
}

const Navbar = styled.div`
	z-index: 100;
	position: fixed;
	height: 9%;
	width: 100%;
	background: linear-gradient(90deg, #FFFBE9 20%, #e3c69a 60%) 0px 0px;
	color: black;
	border: 3px solid #E3CAA5;
`

const Name = styled.div`
	position: absolute;
	font-family: 'Festive', cursive;
	font-size: 4.5rem;
	left: 8%;
	top: -15%;
`

const Button = styled.div`
	position: absolute;
	right: 8.9%;
	top: 13%;
`

const SearchedContainer = styled.div`
  width: 30%;
  background-color: #eeeeee;
  border-radius: 10px;
  margin-left: 40.4%;
`

export { Header }