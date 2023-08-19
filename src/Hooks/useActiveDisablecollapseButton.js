import { useEffect } from "react";

export function useActiveDisablecollapseButton({
  setEnableDisableCollapse,
  setProfileLoginButtonStatusOpacityDisplay,
  setCartButtonEnableDisable,
  setProfileLogOutDisableOrFlex,
  searchedArticles }){
  useEffect(()=>{
    if(searchedArticles){
      setEnableDisableCollapse(true)

      setProfileLoginButtonStatusOpacityDisplay({disabled: true, opacity: "0.5", display: true})
      if (window.matchMedia("(max-width: 991px)").matches) {
        setProfileLoginButtonStatusOpacityDisplay({disabled: true, opacity: "0.5", display: false})
      }

      if (window.matchMedia("(max-width: 991px)").matches) {
        setProfileLogOutDisableOrFlex("none")
      }

      setCartButtonEnableDisable({disabled: true, opacity: "0.5", display: true})
      if (window.matchMedia("(max-width: 991px)").matches) {
        setCartButtonEnableDisable({disabled: true, opacity: "0.5", display: false})
      }
    }else if(searchedArticles === null){
      setEnableDisableCollapse(false)

      setProfileLoginButtonStatusOpacityDisplay({disabled: false, opacity: "1", display: true})

      if (window.matchMedia("(max-width: 991px)").matches) {
        setProfileLogOutDisableOrFlex("flex")
      }

      setCartButtonEnableDisable({disabled: false, opacity: "1", display: true})
      if (window.matchMedia("(max-width: 991px)").matches) {
        setCartButtonEnableDisable({disabled: false, opacity: "1", display: true})
      }
    }
  }, [searchedArticles])
}