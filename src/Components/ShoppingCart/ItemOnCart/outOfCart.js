export default function outOfCart(payload, articlesCart, setArticlesCart){
  if(articlesCart.filter(item => item.name === payload)[0].amount === 1){
    const outArticle = articlesCart.filter(item => item.name !== payload)
    setArticlesCart(outArticle)
  }else{
    let articleIndex
    let articleAmount = articlesCart
    for(let i=0; i<articlesCart.length; i++){
      if(articlesCart[i].name === payload){
        articleIndex = i
      }
    }
    articleAmount[articleIndex].amount--
    setArticlesCart([...articleAmount])
  }
}