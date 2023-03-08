import { useState } from "react"

const useContext = () =>{
  const [totalArticles, setTotalArticles] = useState([])
  const [showArticles, setShowArticles] = useState([])
  const [articlesLimitCount, setArticlesLimitCount] = useState(15)
  const [articlesCount, setArticlesCount] = useState(15)
  const [articlesCart, setArticlesCart] = useState([])
  const [itemCartAux, setItemCartAux] = useState([])
  const [itemToDataBase, setItemToDataBase] = useState(null)
  const [amountToPay, setAmountToPay] = useState(0)
  const [articleChoice, setArticleChoice] = useState(0)
  const [cartSwitch, setCartSwitch] = useState("off")
  const [filterStatus, setFilterStatus] = useState(0)
  const [searchedArticles, setSearchedArticles] = useState()
  const [pageCount, setPageCount] = useState(1)
  const [openArticlesModal, setOpenArticlesModal] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [modalArticle, setModalArticle] = useState({})
  const [onOffCartButton, setOnOffCartButton] = useState(false)
  const [cartFilledOrNot ,setCartFilledOrNot] = useState(false)
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState()
  const [passwordAgain, setPasswordAgain] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [emails, setEmails] = useState([])
  const [logUser, setLogUser] = useState()
  const [logPassword, setLogPassword] = useState()
  const [token, setToken] = useState("no")
  const [access, setAccess] = useState()
  const [switchElection, setSwitchElection] = useState()
  const [newSwitch, setNewSwitch] = useState()
  const [purchaseItems, setPurchaseItems] = useState(0)
  const [loginRegisterElection, setLoginRegisterElection] = useState()
  const [loginRegisterSwitch, setLoginRegisterSwitch] = useState("off")
  const [openPurchaseModal, setOpenPurchaseModal] = useState(false)
  const [allUsers, setAllUsers] = useState()
  const [modalScroll, setModalScroll] = useState()
  const [wppLink, setWppLink] = useState("https://wa.me/541562965524?text=Hola%20mi%20nombre%20es")
  
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
    openArticlesModal,
    setOpenArticlesModal,
    openLoginModal,
    setOpenLoginModal,
    modalArticle,
    setModalArticle,
    itemCartAux,
    setItemCartAux,
    itemToDataBase,
    setItemToDataBase,
    onOffCartButton,
    setOnOffCartButton,
    cartFilledOrNot,
    setCartFilledOrNot,
    userName,
    setUserName,
    password,
    setPassword,
    passwordAgain,
    setPasswordAgain,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    emails,
    setEmails,
    logUser,
    setLogUser,
    logPassword,
    setLogPassword,
    token,
    setToken,
    access,
    setAccess,
    switchElection,
    setSwitchElection,
    newSwitch,
    setNewSwitch,
    purchaseItems,
    setPurchaseItems,
    loginRegisterElection,
    setLoginRegisterElection,
    loginRegisterSwitch,
    setLoginRegisterSwitch,
    openPurchaseModal,
    setOpenPurchaseModal,
    allUsers,
    setAllUsers,
    modalScroll,
    setModalScroll,
    wppLink,
    setWppLink
  }
}

export { useContext }