import { useState, useEffect } from "react"

export function usePayPartDiscountDisableOrFlex({ discountCant, articlesCart }){
  const [payPartDiscountDisableOrFlex, setPayPartDiscountDisableOrFlex] = useState("flex")

  useEffect(() =>{
    (Math.floor(discountCant) !== 0 && articlesCart.length !== 0)
      ? setPayPartDiscountDisableOrFlex("flex")
      : setPayPartDiscountDisableOrFlex("none")
    }, [discountCant])

  return { payPartDiscountDisableOrFlex }
}