const changeItemState = (updateObject, border, productService, id, userName) =>{
  updateObject.Status = updateObject.Status === "on" ? "off" : "on"
  updateObject.Status === "on" 
    ? border.current.style.border = "2px solid green"
    : border.current.style.border = "2px solid red"
  productService.update(id, updateObject, userName)
}

export { changeItemState }