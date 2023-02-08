import React from "react"
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Search	} from "./Search/Search"
import "../../CSS/BootstrapModifier.css"
import { openCloseCart } from "./openCloseCart"
import { openCloseLoginRegister } from "./openCloseLoginRegister";
import { Link } from "wouter"
import { Searched } from "../SearchedContainer/Searched/Searched"

function HeaderBootstrap({
  showCart,
  searchedArticles,
  openArticlesModal,
  cartSwitch,
  setCartSwitch,
  articlesCart,
  setArticlesCart,
  itemCartAux,
  setItemCartAux,
  onOffCartButton,
  setOnOffCartButton,
  setCartFilledOrNot,
  userName,
  setUserName,
  access,
  setOpenLoginModal,
  loginRegisterSwitch,
  setLoginRegisterSwitch,
  loginRegisterRef,
  enableDisableCollapse,
  acountRef,
  cartButtonRef,
  searchRef
}) {

  const handleLoginOut = () =>{
    setUserName(null)
    window.localStorage.removeItem('loggedUser')
  }

  const changeModalState = () =>{
    setOpenLoginModal(true)
  }

  return (
    <Navbar expand="lg" fixed="top" z-index="2">
      <Container fluid>
        <Name>Monica Szeki<NameInfo className="etc">Deco. artesanal</NameInfo></Name>
        <EmptyContainer />
        <EnableDisableCollapse ref={enableDisableCollapse}/>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" className="responsiveNav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <NavDropdown.Divider />
            <ContainerToDisable user={userName} ref={searchRef}/>
            {/* <Nav.Link href="#action2" className="signIn">Iniciar Sesion</Nav.Link> */}
            {userName &&
              <ProfileLogOut>
                {access === "no" 
                  ? <ProfileLink href="/profile">Perfil</ProfileLink>
                  : <ProfileLink href="/list">Lista</ProfileLink>
                }
                
                <LogOutButton onClick={handleLoginOut}>Cerrar Sesion</LogOutButton>
              </ProfileLogOut>
            }
            {!userName &&
              <>
                <LoginButton id="loginButton" ref={acountRef} onClick={() => openCloseLoginRegister(
                  loginRegisterSwitch,
                  setLoginRegisterSwitch,
                  loginRegisterRef,
                  enableDisableCollapse,
                  cartSwitch,
                  cartButtonRef,
                  searchRef
                )}>Cuenta</LoginButton>
              </>
            }
            {/* <NavDropdown title="Perfil" id="navbarScrollingDropdown" className="profile">
              <NavDropdown.Item>Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Informacion y Compras</NavDropdown.Item>
              <NavDropdown.Item>Cerrar sesion</NavDropdown.Item>
            </NavDropdown> */}
            <CartButton href="#" className="cart" id="cartButton" ref={cartButtonRef} onClick={() => openCloseCart(
              showCart,
              cartSwitch,
              setCartSwitch,
              articlesCart,
              setArticlesCart,
              itemCartAux,
              setItemCartAux,
              onOffCartButton,
              setOnOffCartButton,
              enableDisableCollapse,
              loginRegisterSwitch,
              acountRef,
              searchRef
            )}>Carrito</CartButton>
          </Nav>
          {/* <Form className="d-flex searchForm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              color="red"
            />
            <Button>Search</Button>
          </Form> */}
          <Search searchRef={searchRef}/>
          {/* {
						(searchedArticles && !openArticlesModal) &&
							<SearchedContainer>
								{searchedArticles.length > 0
									?	searchedArticles.map(item =>(
											<Searched 
												items={item.Name}
												itemsPrice={item.Price}
												key={item.Price}
											/>
										))
									: <NoResult>No hay resultados para su busqueda</NoResult>
								}
							</SearchedContainer>
					} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Navbar = styled(NavbarBootstrap)`
  background-color: white;
  font-size: 1.5rem;
  box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
`

const EmptyContainer = styled.div`
  height: 55px;
  @media only screen and (max-width: 991px) {
    height: 65px;
  }
`
const Name = styled.div`
  position: absolute;
	font-family: 'Festive', cursive;
  font-size: clamp(.5rem, 12vw, 4rem);
  top: -8%;
  left: 3%;
  @media only screen and (max-width: 500px) {
    top: 10%;
    left: 3%;
  }
  @media only screen and (max-width: 280px) {
    top: 10%;
    font-size: 2.7rem;
  }
`
const NameInfo = styled.div`
  position: absolute;
  font-family: cursive;
  width: 40%;
  font-size: clamp(0.1rem, 3.3vw, 1rem);
  top: 50%;
  left: 105%;
  @media only screen and (max-width: 400px) {
    top: 55%;
    left: 102%;
  }
  @media only screen and (max-width: 280px) {
    font-size: 0rem;
  }
`

const CartButton = styled.button`
  z-index: 1;
  position: absolute;
  width: 85px;
  padding-top: 5px;
  top: 20%;
  right: 8.2%;
  font-size: 1.5rem;
  color: #595959;
  background-color: white;
  border: none;
  cursor: pointer;
  :hover{
    color: #ab6f4a;
    transition: 0.3s;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 2%;
    right: 0%;
    margin-top: 10px;
  }
  @media (hover: none) {
    :hover {
      color: inherit;
    }
    :active{
      color: #ab6f4a;
    }
    :disabled{
      color: inherit
    }
  }
`

const ContainerToDisable = styled.div`
  z-index: 3000;
  position: absolute;
  display: none;
  width: 200px;
  ${props => props.user ? "height: 160px" : "height: 110px"};
`

const ProfileLogOut = styled.div`
  display: flex;
  margin-left: 2%;
  margin-bottom: 1px;
`

const ProfileLink = styled(Link)`
  z-index: 1;
  position: absolute;
  padding-top: 5px;
  top: 20%;
  right: 33%;
  font-size: 1.5rem;
  width: 75px;
  cursor: pointer;
  color: #595959;
  text-decoration: none;

  :hover{
    color: #ab6f4a;
    transition: 0.3s;
  } 
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 2%;
    right: 0%;
    margin-top: 10px;
  }
`

const LogOutButton = styled.div`
  z-index: 1;
  position: absolute;
  padding-top: 5px;
  top: 20%;
  right: 22%;
  font-size: 1.5rem;
  width: 145px;
  cursor: pointer;
  color: #595959;
  :hover{
    color: #ab6f4a;
    transition: 0.3s;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 5%;
    right: 0%;
    margin-top: 10px;
  }
`

const LoginButton = styled.button`
  z-index: 1;
  position: absolute;
  width: 85px;
  padding-top: 5px;
  top: 20%;
  right: 27.7%;
  font-size: 1.5rem;
  color: #595959;
  background-color: white;
  border: none;
  cursor: pointer;
  :hover{
    color: #ab6f4a;
    transition: 0.3s;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-left: 2%;
    right: 0%;
    margin-top: 10px;
  }
  @media (hover: none) {
    :hover {
      color: inherit;
    }
    :active{
      color: #ab6f4a;
    }
    :disabled{
      color: inherit
    }
  }
`

const EnableDisableCollapse = styled.div`
  @media only screen and (max-width: 991px) {
    display: none;
    position: absolute;
    height: 40px;
    width: 56px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    right: 0%;
    top: 0%;
    margin-right: 12px;
    margin-top: 21px;
  }
`

const SearchedContainer = styled.div`
  position: absolute;
  top: 95%;
  left: 30.3%;
  width: 30.6%; 
  background-color: white;
  border-bottom: 2px solid #AD8B73;
`

const NoResult = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
  width: 97%;
  background-color: white;
  border-radius: 10px;
	font-size: 1.1rem;
`

export { HeaderBootstrap }