const visibleCar = (showCart, cartSwitch, setCartSwitch) =>{
  if(cartSwitch === "off"){
    showCart.current.className = "apearCart"
    setTimeout(() =>{
      showCart.current.className = "CartOn"
    }, 980)
    setCartSwitch("on")
  } else if(cartSwitch === "on"){
    showCart.current.className = "desapearCart"
    setTimeout(() =>{
      showCart.current.className = "CartOff"
    }, 980)
    setCartSwitch("off")
  }
}

export { visibleCar }

