import React, { useContext } from "react"
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Search	} from "./Search/Search"
import "../../CSS/BootstrapModifier.css"
import { openCloseCart } from "./CarButton/Functions/CarButtonFunctions"
import { openCloseLoginRegister, handleLoginOut } from "./Functions/HeaderBootstrapFunctions";
import { Link } from "wouter"
import { AppContext } from "../../Context/AppContext"
import { BsCart4 } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
import { BsFilePerson } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"

function HeaderBootstrap(){

  const {
    articlesCart,
    setArticlesCart,
    cartSwitch,
    setCartSwitch,
    itemCartAux,
    setItemCartAux,
    onOffCartButton,
    setOnOffCartButton,
    userName,
    setUserName,
    setPassword,
    setPasswordAgain,
    setName,
    setEmail,
    setPhone,
    setEmails,
    setLogUser,
    setLogPassword,
    setToken,
    access,
    setAccess,
    loginRegisterSwitch,
    setLoginRegisterSwitch,
    setDiscountCant,
    enableDisableCollapse,
    setEnableDisableCollapse,
    cartButtonEnableDisable,
    setCartButtonEnableDisable,
    searchEnableDisable,
    setSearchEnableDisable,
    setBuyButtonEnableDisable,
    profileLoginButtonStatusOpacityDisplay,
    setProfileLoginButtonStatusOpacityDisplay,
    profileLogOutDisableOrFlex,
    setProfileLogOutDisableOrFlex,
    setShopingCartStatus,
    setLoginregisterStatus,
  } = useContext(AppContext)

  return (
    <Navbar expand="lg" fixed="top" z-index="2">
      <Container fluid>
        <Name><Star1 /><Star2 />Monica Szeki<NameInfo className="etc">Deco. artesanal</NameInfo></Name>
        <EmptyContainer />
        {enableDisableCollapse && <EnableDisableCollapse />}
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" className="responsiveNav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <NavDropdown.Divider />
            {searchEnableDisable.display === true && searchEnableDisable.disabled
              ? <ContainerToDisable user={userName} disabled opacity={searchEnableDisable.opacity} />
              : searchEnableDisable.display === true && !searchEnableDisable.disabled
                ? <ContainerToDisable user={userName} opacity={searchEnableDisable.opacity} />
                : null
            }
            {userName &&
              <ProfileLogOut profileLogOutDisableOrFlex={profileLogOutDisableOrFlex}>
                {access === "yes" 
                  ? <ProfileLink href="/list"><p>Lista</p><ProfileIcon /></ProfileLink>
                  : <ProfileLink href="/profile" ><p>Perfil</p><ProfileIcon /></ProfileLink>
                }
                <Slash>/</Slash>
                <LogOutButton onClick={() => handleLoginOut(
                  setUserName,
                  setPassword,
                  setPasswordAgain,
                  setName,
                  setEmail,
                  setPhone,
                  setEmails,
                  setLogUser,
                  setToken,
                  setAccess,
                  setLogPassword,
                  openCloseCart,
                  setShopingCartStatus,
                  cartSwitch,
                  setCartSwitch,
                  articlesCart,
                  setArticlesCart,
                  itemCartAux,
                  setItemCartAux,
                  onOffCartButton,
                  setOnOffCartButton,
                  setEnableDisableCollapse,
                  loginRegisterSwitch,
                  setProfileLoginButtonStatusOpacityDisplay,
                  setSearchEnableDisable,
                  setBuyButtonEnableDisable,
                  setProfileLogOutDisableOrFlex,
                  setDiscountCant)}><p>Cerrar Sesión</p><LogOutIcon /></LogOutButton>
              </ProfileLogOut>
            }
            { profileLoginButtonStatusOpacityDisplay.disabled
                ? !userName && <LoginButton id="loginButton" disabled profileLoginStatus={profileLoginButtonStatusOpacityDisplay} onClick={() => openCloseLoginRegister(
                  loginRegisterSwitch,
                  setLoginRegisterSwitch,
                  setLoginregisterStatus,
                  setEnableDisableCollapse,
                  cartSwitch,
                  setCartButtonEnableDisable,
                  setSearchEnableDisable)}><p>Cuenta</p><LogInIcon /></LoginButton>
                : !userName && <LoginButton id="loginButton" profileLoginStatus={profileLoginButtonStatusOpacityDisplay} onClick={() => openCloseLoginRegister(
                  loginRegisterSwitch,
                  setLoginRegisterSwitch,
                  setLoginregisterStatus,
                  setEnableDisableCollapse,
                  cartSwitch,
                  setCartButtonEnableDisable,
                  setSearchEnableDisable)}><p>Cuenta</p><LogInIcon /></LoginButton>
            }
            {
              cartButtonEnableDisable.display === true && cartButtonEnableDisable.disabled
                ? <CartButton href="#" className="cart" disabled id="cartButton" opacity={cartButtonEnableDisable.opacity} onClick={() => openCloseCart(
                  setShopingCartStatus,
                  cartSwitch,
                  setCartSwitch,
                  articlesCart,
                  setArticlesCart,
                  itemCartAux,
                  setItemCartAux,
                  onOffCartButton,
                  setOnOffCartButton,
                  setEnableDisableCollapse,
                  loginRegisterSwitch,
                  setProfileLoginButtonStatusOpacityDisplay,
                  setSearchEnableDisable,
                  setBuyButtonEnableDisable,
                  setProfileLogOutDisableOrFlex,
                  setDiscountCant
                 )}><p>Carrito</p><CartIcon /></CartButton>
                : cartButtonEnableDisable.display === true && !cartButtonEnableDisable.disabled
                  ? <CartButton href="#" className="cart" id="cartButton" opacity={cartButtonEnableDisable.opacity} onClick={() => openCloseCart(
                    setShopingCartStatus,
                    cartSwitch,
                    setCartSwitch,
                    articlesCart,
                    setArticlesCart,
                    itemCartAux,
                    setItemCartAux,
                    onOffCartButton,
                    setOnOffCartButton,
                    setEnableDisableCollapse,
                    loginRegisterSwitch,
                    setProfileLoginButtonStatusOpacityDisplay,
                    setSearchEnableDisable,
                    setBuyButtonEnableDisable,
                    setProfileLogOutDisableOrFlex,
                    setDiscountCant
                   )}><p>Carrito</p><CartIcon /></CartButton>
                  : null
            }
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Star1 = styled(AiFillStar)`
  position: absolute;
  top: 25%;
  left: 37%;
  font-size: clamp(.5rem, 3vw, 1rem);
  color: #AC8DAF;
  background-color: white;

  @media only screen and (max-width: 280px){
    top: 30%;
    left: 38%;
  }
`
const Star2 = styled(AiFillStar)`
  position: absolute;
  top: 25%;
  left: 95%;
  font-size: clamp(.5rem, 3vw, 1rem);
  color: #AC8DAF;
  background-color: white;

  @media only screen and (max-width: 280px){
    top: 30%;
    left: 96%;
  }
`

const Navbar = styled(NavbarBootstrap)`
  font-size: 1.5rem;
  background-color: white;
  box-shadow: 0px 0px 10px 3px #AC8DAF;
`

const Name = styled.h1`
  position: absolute;
  top: 15%;
  left: 3%;
	font-family: 'Festive', cursive;
  font-size: clamp(.5rem, 12vw, 4rem);
  @media only screen and (max-width: 1220px) {
    left: 0%;
  }
  @media only screen and (max-width: 420px) {
    position: absolute;
    margin-top: 15px;
    top: 0%;
    margin-top: 6%;
    left: 3%;
  }
  @media only screen and (max-width: 280px) {
    top: 0%;
    font-size: 2.7rem;
  }
`
const NameInfo = styled.span`
  position: absolute;
  font-family: cursive;
  width: 40%;
  top: 50%;
  left: 105%;
  color: #70416D;
  font-size: clamp(0.1rem, 3.3vw, 1rem);
  @media only screen and (max-width: 1130px) {
    top: 60%;
  }
  @media only screen and (max-width: 400px) {
    top: 55%;
    left: 102%;
    font-size: 0rem;
  }  
  @media only screen and (max-width: 280px) {
    font-size: 0rem;
  }
`

const EmptyContainer = styled.div`
  height: 70px;
  @media only screen and (max-width: 991px) {
    height: 65px;
  }
`

const EnableDisableCollapse = styled.div`
  @media only screen and (max-width: 991px) {
    position: absolute;
    height: 40px;
    width: 56px;
    margin-top: 1px;
    margin-right: 12px;
    top: 8%;
    right: 0.1%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 500px) {
    margin-top: 20.5px;
    top: 0%;
    right: 0%;
  }
`

const ContainerToDisable = styled.div`
  z-index: 3000;
  display: none;
  position: absolute;
  height: ${props => props.user ? "160px" : "110px"};;
  width: 200px;
  opacity: ${props => props.opacity === "1" ? "1" : "0.5"};
`

const ProfileLogOut = styled.div`
  display: ${props => props.profileLogOutDisableOrFlex === "flex" ? "flex" : "none"};
`

const ProfileLink = styled(Link)`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  top: 11%;
  right: 33%;
  font-size: 1.5rem;
  color: #AC8DAF;
  text-decoration: none;
  cursor: pointer;

  p{
    margin-bottom: 3px;
  }

  :hover{
    color: #70416D;
    transition: 0.3s;
  } 
  @media only screen and (max-width: 1400px) {
    right: 30%;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-top: 10px;
    right: 0%;
    font-size: 1.4rem;
  }
`

const ProfileIcon = styled(BsFilePerson)`
  height: 30px;
  width: 30px;

  @media only screen and (max-width: 991px){
    display: none;
  }
`

const Slash = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    z-index: 1;
    position: relative;
    display: inline;
    margin-left: 5%;
    margin-top: 10px;
    top: 20%;
    right: 0%;
    color: #AC8DAF;
    font-size: 1.5rem;
    text-decoration: none;

  }
  @media only screen and (max-width: 500px) {
    position: relative;
    margin-top: 10px;
    margin-left: 2%;
    right: 0%;
  }
`

const LogOutButton = styled.button`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  top: 11%;
  right: 21%;
  font-size: 1.5rem;
  color: #AC8DAF;
  background-color: white;
  border: none;
  cursor: pointer;

  p{
    margin-bottom: 3px;
  }
  :hover{
    color: #70416D;
    transition: 0.3s;
  }
  
  @media only screen and (max-width: 1400px) {
    right: 17%;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-top: 9.5px;
    margin-left: 7%;
    right: 6%;
    font-size: 1.4rem;
  }
`

const LogOutIcon = styled(BiLogOut)`
  height: 35px;
  width: 35px;

  @media only screen and (max-width: 991px){
    display: none;
  }
`

const LoginButton = styled.button`
  z-index: 1;
  display: ${props => props.profileLoginStatus.display === true ? "inline-block" : "none"};
  position: absolute;
  width: 85px;
  top: 11%;
  right: 25%;
  font-size: 1.5rem;
  color: #AC8DAF;
  background-color: transparent;
  opacity: ${props => props.profileLoginStatus.opacity === "1" ? "1" : "0.5"};
  border: none;
  cursor: pointer;

  p{
    margin-bottom: 0px;
  }
  :hover{
    color: #70416D;
    transition: 0.3s;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-top: 10px;
    right: 0%;
    font-size: 1.4rem;
  }
  @media (hover: none) {
    :hover {
      color: inherit;
    }
    :active{
      color: #70416D;
    }
    :disabled{
      color: inherit
    }
  }
`

const LogInIcon = styled(BiLogIn)`
  height: 35px;
  width: 35px;
  margin-bottom: 10%;

  @media only screen and (max-width: 991px){
    display: none;
  }
`

const CartButton = styled.button`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85px;
  top: 11%;
  right: 8.2%;
  font-size: 1.5rem;
  color: #AC8DAF;
  background-color: white;
  opacity: ${props => props.opacity === "1" ? "1" : "0.5"};
  border: none;
  cursor: pointer;
  :hover{
    color: #70416D;
    transition: 0.3s;
  }

  p{
    margin-bottom: -3px;
  }

  @media only screen and (max-width: 1400px) {
    right: 5%;
  }
  @media only screen and (max-width: 991px) {
    position: relative;
    margin-top: 10px;
    right: 0%;
    font-size: 1.4rem;
  }
  
  @media (hover: none) {
    :hover {
      color: inherit;
    }
    :active{
      color: #70416D;
    }
    :disabled{
      color: inherit
    }
  }
`

const CartIcon = styled(BsCart4)`
  height: 35px;
  width: 35px;

  @media only screen and (max-width: 991px){
    display: none;
  }
`

export { HeaderBootstrap }