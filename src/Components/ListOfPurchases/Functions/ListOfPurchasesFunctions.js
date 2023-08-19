const switchButton = (setProductSwitch) =>{
  setProductSwitch((prevstate => prevstate === "off" ? "on" : "off"))
}

export { switchButton }