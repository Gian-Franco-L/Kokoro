const visibleCar = (showCart) =>{
  showCart.current.className = "apearCart"
  setTimeout(() =>{
    showCart.current.className = "CartOn"
  }, 980)
}

export default visibleCar