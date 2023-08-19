const changeModalState = (body, setModalArticle, setOpenArticlesModal, updateObject) =>{
  setOpenArticlesModal(true)
  setModalArticle({
    'item': updateObject.Name,
    'price': updateObject.Price,
    'date': updateObject.Date,
    'size': updateObject.Size,
    'material': updateObject.Fabric,
    'stuffing': updateObject.Stuffing,
    'itemType': updateObject.ItemType,
    'status': updateObject.Status,
    'img': updateObject.Img
  })
  body.style.overflowY = "hidden"
}

export { changeModalState }