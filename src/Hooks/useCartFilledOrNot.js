import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"

export function useCartFilledOrNot(){
  const {
    articlesCart,
    setCartFilledOrNot,
    itemCartAux,
    setShopingCartHeight
  } = useContext(AppContext)

  useEffect(() =>{
    articlesCart.length>0
      ? setShopingCartHeight("auto")
      : setShopingCartHeight("58px")

    if(itemCartAux.length === 0 && articlesCart.length === 0){
      setCartFilledOrNot(false)
    }else{
      setCartFilledOrNot(true)
    }
  }, [articlesCart])
}