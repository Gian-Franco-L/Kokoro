const deletePurchase = async(setDeletepurchaseId, purchase, userName, purchaseService, userService, token) =>{
  setDeletepurchaseId(true)
  await purchaseService.deletePurchase(purchase.id, {token})
  await userService.deleteUser(purchase.id, userName, {token})
}

export { deletePurchase }