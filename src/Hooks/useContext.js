import { useState } from "react"

const useContext = () =>{
  const startingArticles = [
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
  ]
  const totalArticles = [
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
      Name: "vb",
      Price: 657,
      Date: 2015
    },
    {
      id: 13,
      Name: "asd",
      Price: 61,
      Date: 2015.05
    },
    {
      id: 14,
      Name: "c",
      Price: 285,
      Date: 2015.06
    },
    {
      id: 15,
      Name: "d",
      Price: 151,
      Date: 2015.08
    },
    {
      id: 16,
      Name: "e",
      Price: 725,
      Date: 2015.10
    },
    {
      id: 17,
      Name: "gf",
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
      Name: "q",
      Price: 199,
      Date: 2016.07
    },
    {
      id: 20,
      Name: "t",
      Price: 93,
      Date: 2017.02
    },
    {
      id: 21,
      Name: "u",
      Price: 222,
      Date: 2018.05
    },
    {
      id: 22,
      Name: "vc",
      Price: 679,
      Date: 2018.10
    },
    {
      id: 23,
      Name: "n",
      Price: 172,
      Date: 2019.12
    },
    {
      id: 24,
      Name: "m",
      Price: 286,
      Date: 2020.11
    },
  ]
  const [showArticles, setShowArticles] = useState(startingArticles)
  const [articlesCount, setArticlesCount] = useState(10)
  const [articlesCart, setArticlesCart] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [priceTimeChoice, setPriceTimeChoice] = useState("none")


  return{
    startingArticles,
    showArticles,
    setShowArticles,
    articlesCount,
    setArticlesCount,
    totalArticles,
    articlesCart,
    setArticlesCart,
    searchValue,
    setSearchValue,
    priceTimeChoice,
    setPriceTimeChoice
  }
}

export { useContext }