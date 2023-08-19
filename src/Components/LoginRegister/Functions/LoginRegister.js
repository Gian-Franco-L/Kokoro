const user = (election, setOpenLoginModal, setLoginRegisterElection, body)=>{
  setOpenLoginModal(true)
  setLoginRegisterElection(election)
  body.style.overflowY = "hidden"
}

const openCloseLoginRegister = (
  loginRegisterSwitch,
  setLoginRegisterSwitch,
  setLoginregisterStatus,
  setEnableDisableCollapse,
  setCartButtonEnableDisable,
  setSearchEnableDisable
  ) =>{
  if(loginRegisterSwitch === "off"){
    setLoginRegisterSwitch("on")
    setLoginregisterStatus("on")
  }
  if(loginRegisterSwitch === "on"){
    setLoginRegisterSwitch("off")
    setLoginregisterStatus("off")
    setEnableDisableCollapse(false)
    setCartButtonEnableDisable({disabled: false, opacity: "1", display: true})
    setSearchEnableDisable({disabled: false, opacity: "1", display: true})
  }
}

export { user, openCloseLoginRegister }