const deleteChoice = (purchases, purchaseService, token, deleteChoiceButtonRef) =>{
  if(purchases.status === "on"){
    let newPurchase = purchases
    newPurchase.status = "off"
    purchaseService.updatePurchase(purchases.id, newPurchase, {token})
      .then(() => deleteChoiceButtonRef.current.innerHTML = "Cancelar")
  }else if(purchases.status === "off"){
    let newPurchase = purchases
    newPurchase.status = "on"
    purchaseService.updatePurchase(purchases.id, newPurchase, {token})
      .then(() => deleteChoiceButtonRef.current.innerHTML = "Eliminar")
  }
}

export { deleteChoice }