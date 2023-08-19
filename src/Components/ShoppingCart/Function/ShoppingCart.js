const buy = (setOpenPurchaseModal) =>{
  const body = document.getElementById("body")
  setOpenPurchaseModal(true)
  body.style.overflowY = "hidden"
}

export { buy }