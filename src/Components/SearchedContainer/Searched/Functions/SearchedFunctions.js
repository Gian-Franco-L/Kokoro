const changeModalState = (
  setOpenArticlesModal, 
  setModalArticle,
  items,
  itemsPrice,
  date,
  size,
  material,
  stuffing,
  type,
  status,
  img,) =>{
  setOpenArticlesModal(true)
  setModalArticle({
    'item': items,
    'price': itemsPrice,
    'date': date,
    'size': size,
    'material': material,
    'stuffing': stuffing,
    'itemType': type,
    'status': status,
    'img': img,
  })
}

export { changeModalState }