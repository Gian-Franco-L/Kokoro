import { useState } from "react"

const useContext = () =>{
  const [totalHomeArticles, setTotalHomeArticles] = useState([])
  const [totalWinterArticles, setTotalWinterArticles] = useState([])
  const [showArticles, setShowArticles] = useState([])
  const [articlesLimitCount, setArticlesLimitCount] = useState(15)
  const [articlesCount, setArticlesCount] = useState(15)
  const [articlesCart, setArticlesCart] = useState([])
  const [itemCartAux, setItemCartAux] = useState([])
  const [itemToDataBase, setItemToDataBase] = useState(null)
  const [articleChoice, setArticleChoice] = useState("hogar")
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
  const [wppLink, setWppLink] = useState("https://wa.me/541562965524?text=Hola%20mi%20nombre%20es")
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState()
  const [newPassword, setNewPassword] = useState()
  const [discountCant, setDiscountCant] = useState(0)
  const [cuelloGorroSizes, setCuelloGorroSizes] = useState([])
  const [cuelloGorroSizeChoice, setCuelloGorroSizeChoice] = useState("?")
  const [cantAdded, setCantAdded] = useState(0)
  const [productSwitch, setProductSwitch] = useState("off")
  const [onOffDiscountModal, setOnOffDiscountModal] = useState("off")
  const [onOffFilterModal, setOnOffFilterModal] = useState("off")
  const [deletePurchaseStatus, setDeletePurchaseStatus] = useState("off")
  const [buttonsCarouselState, setButtonsCarouselState] = useState(true)
  const [resetPasswordRegister, setResetPasswordRegister] = useState(true)

  const [typesContainerAnimationStatus, setTypesContainerAnimationStatus] = useState({display: true, animation: "enabled"})
  const [selectedArticlesAnimationStatus, setSelectedArticlesAnimationStatus] = useState({display: true, animation: "none"})
  const [enableDisableCollapse, setEnableDisableCollapse] = useState(false)
  const [cartButtonEnableDisable, setCartButtonEnableDisable] = useState({disabled: false, opacity: "1", display: true})
  const [searchEnableDisable, setSearchEnableDisable] = useState({disabled: false, opacity: "1", display: true})
  const [buyButtonEnableDisable, setBuyButtonEnableDisable] = useState({disabled: false, opacity: "1"})
  const [profileLoginButtonStatusOpacityDisplay, setProfileLoginButtonStatusOpacityDisplay] = useState({disabled: false, opacity: "1", display: true})
  const [profileLogOutDisableOrFlex, setProfileLogOutDisableOrFlex] = useState("flex")
  const [shopingCartStatus, setShopingCartStatus] = useState("off")
  const [shopingCartHeight, setShopingCartHeight] = useState("auto")
  const [loginRegisterStatus, setLoginregisterStatus] = useState("off")
  const [plusMargin, setPlusMargin] = useState()
  const [plusStatus, setPlusStatus] = useState("off")
  const [sizeApearContainerStatus, setSizeApearContainerStatus] = useState({cuello: "none", botitas: "none", pantalones: "none", batitas: "none", bombachudo: "none"})
  const [sizeAlert, setSizeAlert] = useState("off")

  //forgotPassword
  const [forgotPasswordMsjInput, setForgotPasswordMsjInput] = useState({placeholder: "Email", boxShadow: true, redPlaceholder: false})

  //articlesModal
  const [globalImagenDisplay, setGlobalImagenDisplay] = useState('none')
  const [closeGlobalImage, setCloseGlobalImage] = useState('none')
  const [sizeChoiceButtonDisplay, setSizeChoiceButtonDisplay] = useState(true)
  const [buyContainerEnableOrFlex, setBuyContainerEnableOrFlex] = useState('none')

  return{
    totalHomeArticles,
    setTotalHomeArticles,
    totalWinterArticles,
    setTotalWinterArticles,
    showArticles,
    setShowArticles,
    articlesLimitCount,
    setArticlesLimitCount,
    articlesCount,
    setArticlesCount,
    articlesCart,
    setArticlesCart,
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
    wppLink,
    setWppLink,
    forgotPasswordEmail,
    setForgotPasswordEmail,
    newPassword,
    setNewPassword,
    discountCant,
    setDiscountCant,
    cuelloGorroSizes,
    setCuelloGorroSizes,
    cuelloGorroSizeChoice,
    setCuelloGorroSizeChoice,
    cantAdded,
    setCantAdded,
    productSwitch,
    setProductSwitch,
    onOffDiscountModal,
    setOnOffDiscountModal,
    onOffFilterModal,
    setOnOffFilterModal,
    deletePurchaseStatus,
    setDeletePurchaseStatus,
    buttonsCarouselState,
    setButtonsCarouselState,
    sizeAlert,
    setSizeAlert,
    resetPasswordRegister,
    setResetPasswordRegister,

    forgotPasswordMsjInput,
    setForgotPasswordMsjInput,

    typesContainerAnimationStatus,
    setTypesContainerAnimationStatus,
    selectedArticlesAnimationStatus,
    setSelectedArticlesAnimationStatus,
    enableDisableCollapse,
    setEnableDisableCollapse,
    cartButtonEnableDisable,
    setCartButtonEnableDisable,
    searchEnableDisable,
    setSearchEnableDisable,
    buyButtonEnableDisable,
    setBuyButtonEnableDisable,
    profileLoginButtonStatusOpacityDisplay,
    setProfileLoginButtonStatusOpacityDisplay,
    profileLogOutDisableOrFlex,
    setProfileLogOutDisableOrFlex,
    shopingCartStatus,
    setShopingCartStatus,
    shopingCartHeight,
    setShopingCartHeight,
    loginRegisterStatus,
    setLoginregisterStatus,
    plusMargin,
    setPlusMargin,
    plusStatus,
    setPlusStatus,
    sizeApearContainerStatus,
    setSizeApearContainerStatus,

    globalImagenDisplay,
    setGlobalImagenDisplay,
    closeGlobalImage,
    setCloseGlobalImage,
    sizeChoiceButtonDisplay,
    setSizeChoiceButtonDisplay,
    buyContainerEnableOrFlex,
    setBuyContainerEnableOrFlex
  }
}

export { useContext }