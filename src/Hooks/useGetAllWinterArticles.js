import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import productService from "../Services/product"

export function useGetAllWinterArticles(){

  const {
    setTotalWinterArticles
  } = useContext(AppContext)

  useEffect(() => {
    productService.getAll()
    .then((res) => {
      res.sort((a, b) => b.Date - a.Date)
      const winter = res.filter(art => art.Type === "niños")
      setTotalWinterArticles(winter)
    })
  }, []);
}