import { useEffect, useState, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import productService from "../Services/product"

export function useGetAllArticles(){
  const {
    setTotalHomeArticles,
    setTotalWinterArticles,
    setShowArticles,
    articleChoice,
    setSelectedArticlesAnimationStatus
  } = useContext(AppContext)

  const [allArticles, setAllArticles] = useState([])

  useEffect(() =>{
    let articlesAux = []
    productService.getAll()
      .then((res) => {
        res.sort((a, b) => b.Date - a.Date)

        const home = res.filter(art => art.Type === "hogar" && art.Status === 'on')
        const winter = res.filter(art => art.Type === "niños" && art.Status === 'on')

        if(articleChoice === "hogar"){
          for(let i=0; i<15; i++){
            articlesAux.push(home[i])
          }
        }
        if(articleChoice === "niños"){
          for(let j=0; j<15; j++){
            if(winter[j].Status === 'on') articlesAux.push(winter[j])
          }
        }

        setAllArticles(res)
        setTotalHomeArticles(home)
        setTotalWinterArticles(winter)
        setShowArticles(articlesAux)
      })

      setSelectedArticlesAnimationStatus({display: false, animation: "disabled"})
  }, [articleChoice])

  return { allArticles }
}