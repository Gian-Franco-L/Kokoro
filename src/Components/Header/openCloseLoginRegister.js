const openCloseLoginRegister = (
  loginRegisterSwitch,
  setLoginRegisterSwitch,
  loginRegisterRef,
  enableDisableCollapse,
  cartSwitch,
  cartButtonRef,
  searchRef
  ) =>{
  if(loginRegisterSwitch === "off"){
    setLoginRegisterSwitch("on")
    loginRegisterRef.current.className = "apearLoginRegister"
    enableDisableCollapse.current.style.display = "inline"
    cartButtonRef.current.setAttribute("disabled", "");
    cartButtonRef.current.style.opacity = "0.5"
    searchRef.current.setAttribute("disabled", "");
    searchRef.current.style.opacity = "0.5"
  }
  if(loginRegisterSwitch === "on"){
    setLoginRegisterSwitch("off")
    loginRegisterRef.current.className = "startingLoginRegister"
    if(cartSwitch === "off"){
      enableDisableCollapse.current.style.display = "none"
    }
    cartButtonRef.current.removeAttribute("disabled");
    cartButtonRef.current.style.opacity = "1"
    searchRef.current.removeAttribute("disabled");
    searchRef.current.style.opacity = "1"
  }
}

export { openCloseLoginRegister }