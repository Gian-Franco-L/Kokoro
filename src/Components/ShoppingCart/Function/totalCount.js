const totalCount = (articlesCart, discountCant) =>{
  let money = 0
  for(let i=0; i<articlesCart.length; i++){
    if(articlesCart[i].amount !== 0){
      money = money + articlesCart[i].price * articlesCart[i].amount
    }
  }
  if(discountCant !== undefined) money = money - (1200 * Math.floor(discountCant/12))
  return money
}

export { totalCount }