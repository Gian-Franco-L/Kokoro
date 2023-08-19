import { useEffect, useContext } from "react"
import { AppContext } from "../Context/AppContext"

export function usePlusSignAndBuyContainerPosition({ setBuyContainerEnableOrFlex }){
  const {
    modalArticle,
    userName,
    setPlusMargin,
  } = useContext(AppContext)

  useEffect(() =>{
    if(modalArticle.item.split(' ')[0] !== 'Cuellogorro' || modalArticle.item.split(' ')[1] === 'mix' || modalArticle.item.split(' ')[modalArticle.item.split(' ').length -1] === 'mix'){
      setPlusMargin("70%")
    }else{
      setPlusMargin("105%")
    }
    if(userName){
      setBuyContainerEnableOrFlex("flex")
      
    }else{
      setBuyContainerEnableOrFlex("none")
    }
  }, [])
}