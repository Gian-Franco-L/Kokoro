import React from "react"
import userService from "../../Services/user"
import styled from "styled-components"

const SwitchModal = ({
    userName,
    switchElection,
    newSwitch,
    setUserName,
    setName,
    setEmail,
    setPhone,
    setSwitchElection,
    setNewSwitch,
}) => {

  function changeModalState(){
    setSwitchElection()
  }

  async function switchX(){
    try{
      const user = await userService.updateUser({
        userName: userName,
        election: switchElection,
        updateElection: newSwitch
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      setUserName(user.userName)
      setName(user.name)
      setEmail(user.email)
      setPhone(user.phone)
      setSwitchElection()
    } catch(e){
      console.error(e);
    }
  }

  return(
    <Modal>
      <ModalContainer>
        <CloseModalButton>
          <button onClick={changeModalState}>X</button>
        </CloseModalButton>
        <Tittle>Cambio de {switchElection}</Tittle>
        <InputLabel>
          <InputLabelSwitch>
            <label htmlFor="switch">Nuevo {switchElection}:</label>
            <input
              name="switch"
              type="text"
              className=""
              id="switch"
              onChange={({target}) => setNewSwitch(target.value)}
              required
            />
          </InputLabelSwitch>
        </InputLabel>
        <SwitchButton><button onClick={switchX}>Cambiar</button></SwitchButton>
      </ModalContainer>
    </Modal>
  )
}

const Modal = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  justify-content: center;
  align-items: center;
  background: rgba(32, 35, 51, 0.9);
`

const ModalContainer = styled.div`
  position: relative;
  height: 40%;
  width: 500px;
  margin-top: 1%;
  background-color: white;
  box-shadow: 0px 0px 2px 1px #ab6f4a;
`

const CloseModalButton = styled.div`
  position: absolute;
  top: 0.5%;
  right: 0.5%;
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.5rem;
    :hover{
      color: #ab6f4a;
    }
  }
`

const Tittle = styled.div`
  position: relative;
  display: flex;
  height: 70px;
  width: 80%;
  margin-top: 55px;
  margin-left: 10%;
  padding-top: 1.5%;
  padding-left: 9%;
  box-shadow: 0px 0px 10px 3px rgb(154, 154, 154);
  background-color: white;
  text-align: center;
  font-size: 2.3rem;
  /* h1{
    margin-top: 12%;
    margin-left: 20%;
  } */
`

const InputLabel = styled.div`
  position: absolute;
  left: 5%;
  top: 35%;
`

const InputLabelSwitch = styled.div`
  font-size: 1.4rem;
  margin-top: 60px;
  input{
      width: 57%;
      background-color: #f5f5f5;
      font-size: 1.3rem;
      margin-left: 10px;
      padding-left: 13px;
      border-radius: 60px;
      box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
      border: none;
      outline: none;
      :hover{
        box-shadow: 0px 0px 5px 1px #ab6f4a;
      }
      :focus{
        box-shadow: 0px 0px 5px 1px #ab6f4a;
      }
    }
`

const InputLabelPassword = styled.div`
  font-size: 1.4rem;
  margin-top: 80px;
  input{
      font-size: 1.3rem;
      background-color: #f5f5f5;
      margin-left: 10px;
      padding-left: 13px;
      border-radius: 60px;
      box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
      border: none;
      outline: none;
      :hover{
        box-shadow: 0px 0px 5px 1px #ab6f4a;
      }
      :focus{
        box-shadow: 0px 0px 5px 1px #ab6f4a;
      }
    }
`

const SwitchButton = styled.div`
  button{
    z-index: 1;
    position: absolute;
    height: 40px;
    width: 130px;
    bottom: 10%;
    left: 35%;
    padding-left: 7px;
    font-size: 1.5rem;
    border-radius: 60px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
    :hover{
      transform: scale(1.05);
    }
    :active{
      box-shadow: 0px 0px 5px 1px #ab6f4a;
    }
  }
`

export { SwitchModal }