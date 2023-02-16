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
    <Overlay>
      <ModalContainer>
        <ChangeName>
          <CloseModalButton>
            <button onClick={changeModalState}>X</button>
          </CloseModalButton>
          <BorderContainerChangeName>
            <h2>Cambio de {switchElection}</h2>
            <form>
              <InputLabel>
                <label htmlFor="switch" />
                <input
                  name="switch"
                  type="text"
                  className=""
                  id="switch"
                  placeholder="Nuevo nombre"
                  onChange={({target}) => setNewSwitch(target.value)}
                  required
                />
              </InputLabel>
            </form>
            <span><BorderContainerChangeNameButton><button onClick={switchX}>Cambiar</button></BorderContainerChangeNameButton></span>
          </BorderContainerChangeName>
        </ChangeName>
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  z-index: 10000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  background: rgba(32, 35, 51, 0.9);
`

const ModalContainer = styled.div`
  position: relative;
  border-radius: 20px;
  width: 450px;
  height: 350px;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`

const ChangeName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  padding: 3px;
  background-color: #ebe9eb;
  border-radius: 20px;
`

const CloseModalButton = styled.div`
  position: absolute;
  top: 1%;
  right: 2.5%;
  button{
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.5rem;
    :hover{
      color: #ab6f4a;
    }
  }
`

const BorderContainerChangeName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 20px;
  padding: 2%;

  h2{
    font-size: clamp(2.5rem, 13vw, 4rem);
    font-family: 'Festive', cursive;
    @media only screen and (max-width: 300px) {
      margin-top: 5%;
    }
  }
  form{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    width: 100%;
    input{
      width: 100%;
      font-size: 1.3rem;
      background-color: #ebe9eb;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 2px solid black;
      outline: none;
      :hover{
        border-bottom: 2px solid #ab6f4a;
      }
    }
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    width: 130px;
    padding: 3px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 1px rgb(125, 125, 125);
    :hover{
      transform: scale(1.05);
    }
    :active{
      box-shadow: 0px 0px 5px 1px #ab6f4a;
    }
    @media only screen and (max-width: 300px) {
      height: 12%;
    }
  }
  button{
    background-color: transparent;
    border: none;
  }
`

const InputLabel = styled.div`
  position: absolute;
  width: 70%;
`

const BorderContainerChangeNameButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: 2px solid #CEAB93;
  border-radius: 50px;
`

export { SwitchModal }