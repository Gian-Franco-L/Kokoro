import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { closeCartOnProfile } from "../Components/Header/Functions/HeaderBootstrapFunctions"

export function useCloseCart(){
  const {
    cartSwitch,
    setCartSwitch,
    articlesCart,
    setOnOffCartButton,
    setArticlesCart,
    setShopingCartStatus
  } = useContext(AppContext)

  useEffect(() =>{
    if(cartSwitch === "on"){
      closeCartOnProfile(
        articlesCart,
        setOnOffCartButton,
        setCartSwitch,
        setArticlesCart,
        setShopingCartStatus
      )
    }
  }, [])
}