import { useState } from "react"

const useContext = () =>{
  const startingArticles = [
    {
      id: 1,
      Name: "hola",
      Price: 123
    },
    {
      id: 2,
      Name: "como",
      Price: 32
    },
    {
      id: 3,
      Name: "estas",
      Price: 54
    },
    {
      id: 4,
      Name: "vos",
      Price: 12
    },
    {
      id: 5,
      Name: "todo",
      Price: 1623
    },
    {
      id: 6,
      Name: "bien",
      Price: 321
    },
    {
      id: 7,
      Name: "vos",
      Price: 105
    },
    {
      id: 8,
      Name: "bien bien",
      Price: 932
    },
    {
      id: 9,
      Name: "que bueno",
      Price: 816
    },
    {
      id: 10,
      Name: "me alegro",
      Price: 730
    },
  ]
  const [ShowArticles, setShowArticles] = useState(startingArticles)
  const [ArticlesCount, setArticlesCount] = useState(10)
  const totalArticles = [
    {
      id: 1,
      Name: "hola",
      Price: 123
    },
    {
      id: 2,
      Name: "como",
      Price: 32
    },
    {
      id: 3,
      Name: "estas",
      Price: 54
    },
    {
      id: 4,
      Name: "vos",
      Price: 12
    },
    {
      id: 5,
      Name: "todo",
      Price: 1623
    },
    {
      id: 6,
      Name: "bien",
      Price: 3211
    },
    {
      id: 7,
      Name: "vos",
      Price: 105
    },
    {
      id: 8,
      Name: "bien bien",
      Price: 932
    },
    {
      id: 9,
      Name: "que bueno",
      Price: 816
    },
    {
      id: 10,
      Name: "me alegro",
      Price: 7301
    },
    {
      id: 11,
      Name: "a",
      Price: 82
    },
    {
      id: 12,
      Name: "vb",
      Price: 657
    },
    {
      id: 13,
      Name: "asd",
      Price: 61
    },
    {
      id: 14,
      Name: "c",
      Price: 285
    },
    {
      id: 15,
      Name: "d",
      Price: 151
    },
    {
      id: 16,
      Name: "e",
      Price: 725
    },
    {
      id: 17,
      Name: "gf",
      Price: 999
    },
    {
      id: 18,
      Name: "h",
      Price: 472
    },
    {
      id: 19,
      Name: "q",
      Price: 199
    },
    {
      id: 20,
      Name: "t",
      Price: 93
    },
    {
      id: 21,
      Name: "u",
      Price: 222
    },
    {
      id: 22,
      Name: "vc",
      Price: 679
    },
    {
      id: 23,
      Name: "n",
      Price: 172
    },
    {
      id: 24,
      Name: "m",
      Price: 286
    },
  ]
  const [ArticlesCart, setArticlesCart] = useState([])
  const [searchValue, setSearchValue] = useState("")

  return{
    startingArticles,
    ShowArticles,
    setShowArticles,
    ArticlesCount,
    setArticlesCount,
    totalArticles,
    ArticlesCart,
    setArticlesCart,
    searchValue,
    setSearchValue
  }
}

export { useContext }