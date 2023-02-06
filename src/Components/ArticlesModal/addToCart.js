export default async function addToCart(
  payload,
  itemsPrice,
  img,
  articlesCart,
  setArticlesCart,
  cartSwitch,
  itemCartAux,
  setItemCartAux,
  setItemToDataBase
){
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
      ? setArticlesCart([...whereToPlaceAricle, {name: payload, amount: 1, price: itemsPrice, img: img}])
      : setItemCartAux([...whereToPlaceAricle, {name: payload, amount: 1, price: itemsPrice, img: img}])
    setItemToDataBase([...whereToPlaceAricle, {name: payload, amount: 1, price: itemsPrice, img: img}])
  }else{
    for(let i=0; i<whereToPlaceAricle.length; i++){
      if(whereToPlaceAricle[i].name === payload){
        articleAmount[i].amount++
        articleAmount[i].price = itemsPrice
        if(whereToPlaceAricle === articlesCart){
          setArticlesCart([...articlesCart])
          setItemToDataBase([...articlesCart])
        }else{
          setItemCartAux([...itemCartAux])
          setItemToDataBase([...itemCartAux])
        }
      }
    }
  }
}