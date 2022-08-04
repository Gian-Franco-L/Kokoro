const invisibleCar = (showCart) =>{
  showCart.current.className = "desapearCart"
  setTimeout(() =>{
    showCart.current.className = "CartOff"
  }, 980)
}
const totalCount = (articlesCart) =>{
  let asd = 0
  for(let i=0; i<articlesCart.length; i++){
    if(articlesCart[i].amount !== 0){
      asd = asd + articlesCart[i].price * articlesCart[i].amount
    }
  }
  return asd
}

export {invisibleCar, totalCount}