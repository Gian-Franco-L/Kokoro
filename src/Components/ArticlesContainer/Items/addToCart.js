export default function addToCart(payload, itemsPrice, articlesCart, setArticlesCart){
  let reRender
  let articleAmount = articlesCart
  console.log(articlesCart);

  if(articlesCart.filter(item => item.name === payload).length === 0){
    setArticlesCart([...articlesCart, {name: payload, amount: 1, price: itemsPrice}])
  }else{
    for(let i=0; i<articlesCart.length; i++){
      if(articlesCart[i].name === payload){
        articleAmount[i].amount++
        articleAmount[i].price = itemsPrice
        reRender = [...articleAmount, {name: "", amount: "", price: ""}]
        setArticlesCart(reRender)
        setTimeout(() =>{
          setArticlesCart(articleAmount)
        }, 0)
      }
    }
  }
}