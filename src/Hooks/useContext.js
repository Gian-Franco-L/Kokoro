import { useState } from "react"

const useContext = () =>{
  const [totalArticles, setTotalArticles] = useState([
    {
      id: 1,
      Name: "hola",
      Price: 123,
      Date: 2012.03
    },
    {
      id: 2,
      Name: "como",
      Price: 32,
      Date: 2012.05
    },
    {
      id: 3,
      Name: "estas",
      Price: 54,
      Date: 2013.05
    },
    {
      id: 4,
      Name: "vos",
      Price: 12,
      Date: 2013.10
    },
    {
      id: 5,
      Name: "todo",
      Price: 1623,
      Date: 2013.12
    },
    {
      id: 6,
      Name: "bien",
      Price: 321,
      Date: 2014.00
    },
    {
      id: 7,
      Name: "vos",
      Price: 105,
      Date: 2014.01
    },
    {
      id: 8,
      Name: "bien bien",
      Price: 932,
      Date: 2014.03
    },
    {
      id: 9,
      Name: "que bueno",
      Price: 816,
      Date: 2014.05
    },
    {
      id: 10,
      Name: "me alegro",
      Price: 730,
      Date: 2014.08
    },
    {
      id: 11,
      Name: "a",
      Price: 82,
      Date: 2014.11
    },
    {
      id: 12,
      Name: "b",
      Price: 657,
      Date: 2015
    },
    {
      id: 13,
      Name: "c",
      Price: 61,
      Date: 2015.05
    },
    {
      id: 14,
      Name: "d",
      Price: 285,
      Date: 2015.06
    },
    {
      id: 15,
      Name: "e",
      Price: 151,
      Date: 2015.08
    },
    {
      id: 16,
      Name: "f",
      Price: 725,
      Date: 2015.10
    },
    {
      id: 17,
      Name: "g",
      Price: 999,
      Date: 2016.01
    },
    {
      id: 18,
      Name: "h",
      Price: 472,
      Date: 2016.04
    },
    {
      id: 19,
      Name: "i",
      Price: 199,
      Date: 2016.07
    },
    {
      id: 20,
      Name: "j",
      Price: 93,
      Date: 2017.02
    },
    {
      id: 21,
      Name: "k",
      Price: 222,
      Date: 2018.05
    },
    {
      id: 22,
      Name: "l",
      Price: 679,
      Date: 2018.10
    },
    {
      id: 23,
      Name: "m",
      Price: 172,
      Date: 2019.12
    },
    {
      id: 24,
      Name: "n",
      Price: 286,
      Date: 2020.11
    },
  ])
  const [showArticles, setShowArticles] = useState([])
  const [articlesLimitCount, setArticlesLimitCount] = useState(12)
  const [articlesCount, setArticlesCount] = useState(12)
  const [articlesCart, setArticlesCart] = useState([])
  const [amountToPay, setAmountToPay] = useState(0)
  const [articleChoice, setArticleChoice] = useState(0)
  const [cartSwitch, setCartSwitch] = useState("off")
  const [filterStatus, setFilterStatus] = useState(0)
  const [searchedArticles, setSearchedArticles] = useState()
  const [pageCount, setPageCount] = useState(1)
  const [openModal, setOpenModal] = useState(false)
  const [modalArticle, setModalArticle] = useState({})
  const [itemCartAux, setItemCartAux] = useState([])
  const [onOffCarButton, setOnOffCarButton] = useState(false)
  const [cartFilledOrNot ,setCartFilledOrNot] = useState(false)


  return{
    showArticles,
    setShowArticles,
    articlesLimitCount,
    setArticlesLimitCount,
    articlesCount,
    setArticlesCount,
    totalArticles,
    setTotalArticles,
    articlesCart,
    setArticlesCart,
    amountToPay,
    setAmountToPay,
    articleChoice,
    setArticleChoice,
    cartSwitch,
    setCartSwitch,
    filterStatus,
    setFilterStatus,
    searchedArticles,
    setSearchedArticles,pageCount,
    setPageCount,
    openModal,
    setOpenModal,
    modalArticle,
    setModalArticle,
    itemCartAux,
    setItemCartAux,
    onOffCarButton,
    setOnOffCarButton,
    cartFilledOrNot,
    setCartFilledOrNot
  }
}

export { useContext }