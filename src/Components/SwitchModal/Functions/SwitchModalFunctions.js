const changeModalState = (setSwitchElection) =>{
  setSwitchElection()
}

const switchX = async(
  userService,
  userName,
  switchElection,
  newSwitch,
  setUserName,
  setName,
  setEmail,
  setPhone,
  setSwitchElection
  ) =>{
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

export { changeModalState, switchX }