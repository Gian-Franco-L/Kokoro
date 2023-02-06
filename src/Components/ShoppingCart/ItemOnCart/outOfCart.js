export default async function outOfCart(payload, articlesCart, setArticlesCart, setItemToDataBase){
  if(articlesCart.filter(item => item.name === payload)[0].amount === 1){
    const outArticle = articlesCart.filter(item => item.name !== payload)
    setArticlesCart(outArticle)
    setItemToDataBase(outArticle)
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
    setItemToDataBase([...articleAmount])
  }
}