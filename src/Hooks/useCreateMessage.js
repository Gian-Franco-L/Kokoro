import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { totalCount } from "../Components/ShoppingCart/Function/totalCount"

export function useCreateMessage(){
  const {
    articlesCart,
    name,
    wppLink,
    setWppLink,
    discountCant
  } = useContext(AppContext)

  useEffect(() =>{
    setWppLink("")
    let auxWppLink = wppLink
    let articlesCartNames = []
    let auxName = name.split(' ')
    const total = totalCount(articlesCart, discountCant)

    articlesCart.length > 0 && articlesCart.map(item =>(
      articlesCartNames.push(item.cuelloGorroSizeChoice === '?' ? `${item.name} Cant:${item.amount}` : `${item.name} ${item.cuelloGorroSizeChoice} Cant: ${item.amount}`)
    ))

    for(let i=0; i<auxName.length; i++){
      auxWppLink = auxWppLink + "%20" + auxName[i]
    }

    auxWppLink = auxWppLink + ",%20acabo%20de%20comprar"

    articlesCartNames.forEach(element => {
      let splitElement = element.split(' ')
      for(let i=0; i<splitElement.length; i++){
        auxWppLink = auxWppLink + "%20" + splitElement[i]
      }
      auxWppLink = auxWppLink + ","
    })
    
    auxWppLink = auxWppLink + `%20y%20el%20total%20es%20Ar$${total}`

    setWppLink(auxWppLink)
  }, [])
}