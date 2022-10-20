export default function addToCart(payload, itemsPrice, articlesCart, setArticlesCart, cartSwitch, itemCartAux, setItemCartAux){
  let articleAmount
  let whereToPlaceAricle

  if(cartSwitch === "on"){
    whereToPlaceAricle = articlesCart
    articleAmount = articlesCart
  }else{
    whereToPlaceAricle = itemCartAux
    articleAmount = itemCartAux
  }

  if(whereToPlaceAricle.filter(item => item.name === payload).length === 0){
    whereToPlaceAricle === articlesCart
      ? setArticlesCart([...whereToPlaceAricle, {name: payload, amount: 1, price: itemsPrice}])
      : setItemCartAux([...whereToPlaceAricle, {name: payload, amount: 1, price: itemsPrice}])
  }else{
    for(let i=0; i<whereToPlaceAricle.length; i++){
      if(whereToPlaceAricle[i].name === payload){
        articleAmount[i].amount++
        articleAmount[i].price = itemsPrice
        whereToPlaceAricle === articlesCart
          ? setArticlesCart([...articlesCart])
          : setItemCartAux([...itemCartAux])
      }
    }
  }
}