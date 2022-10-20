const totalCount = (articlesCart) =>{
  let money = 0
  for(let i=0; i<articlesCart.length; i++){
    if(articlesCart[i].amount !== 0){
      money = money + articlesCart[i].price * articlesCart[i].amount
    }
  }
  return money
}

export { totalCount }