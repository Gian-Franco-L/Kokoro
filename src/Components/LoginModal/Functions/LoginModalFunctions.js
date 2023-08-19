const changeModalState = (
  setOpenLoginModal,
  body,
  setLogUser,
  setLogPassword,
  setPasswordAgain,
  setName,
  setEmail,
  setPhone) =>{
    setOpenLoginModal(false)
    body.style.overflowY = "inherit"
    setLogUser()
    setLogPassword()
    setPasswordAgain()
    setName()
    setEmail()
    setPhone()
}

 const login = async(
  event,
  logUser,
  logPassword,
  userLoginInput,
  passwordLoginInput,
  setLogPassword,
  allUsers,
  setLogUser,
  loginService,
  setUserName,
  setOpenLoginModal,
  body,
  registerUser,
  setName,
  setEmail,
  setToken,
  setAccess,) =>{
  event.preventDefault()

  if(!logUser){
    userLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    return 0
  }
  if(!logPassword){
    userLoginInput.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
    passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    passwordLoginInput.placeholder = "Ingrese una contraseña"
    passwordLoginInput.value = ""
    passwordLoginInput.classList.add("redPlaceholder")
    setLogPassword()
    return 0
  }

  const isUserNameLogged = allUsers.filter(user => user.userName === logUser.toLowerCase())

  if(!isUserNameLogged.length){
    userLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
    userLoginInput.placeholder = "No existe una cuenta con este nombre"
    userLoginInput.value = ""
    userLoginInput.classList.add("redPlaceholder")
    setLogUser()
    return 0
  }

  try{
    if(logUser && logPassword){
      const user = await loginService.login({
        logUser,
        logPassword
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setUserName(logUser)
      setName(user.name)
      setEmail(user.email)
      setToken(user.token)
      setAccess(user.access)

      setOpenLoginModal(false)
      userLoginInput.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      body.style.overflowY = "inherit"
      registerUser.placeholder = "Usuario"
      registerUser.classList.remove("redPlaceholder")
      passwordLoginInput.placeholder = "Contraseña"
      passwordLoginInput.classList.remove("redPlaceholder")
    }
    setLogUser()
    setLogPassword()
  } catch(e){
    setTimeout(() => {
      userLoginInput.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordLoginInput.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      passwordLoginInput.placeholder = "Contraseña incorrecta"
      passwordLoginInput.value = ""
      passwordLoginInput.classList.add("redPlaceholder")
      setLogPassword()
      return 0
    }, [500])
  }
}

  const register = async(
    event,
    validator,
    body,
    allUsers,
    emails,
    logUser,
    password,
    name,
    email,
    phone,
    passwordAgain,
    userService,
    registerUser,
    passwordRegister,
    passwordRegisterAgain,
    nameLastnameRegister,
    emailRegister,
    phoneRegister,
    loginService,
    setOpenLoginModal,
    setUserName,
    setLogUser,
    setPassword,
    setPasswordAgain,
    setName,
    setEmail,
    setToken,
    setPhone,
    setAccess,
    ) =>{
    event.preventDefault()
    
    const isUserNameLogged = allUsers.filter(user => user.userName === logUser.toLowerCase())
    const isEmailLogged = emails.filter(value => value === email)
    const isNumber = /^([0-9 +-])*$/.exec(phone)
    const completeUser = {
      userName: logUser,
      password: password,
      name: name,
      email: email,
      phone: phone,
      cartItem: []
    }

    if(!logUser){
      registerUser.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      return 0
    }
    if(!!isUserNameLogged.length){
      registerUser.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      registerUser.placeholder = "Ya existe una cuenta con este nombre"
      registerUser.value = ""
      registerUser.classList.add("redPlaceholder")
      return 0
    }
    if(!password){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      registerUser.placeholder = "Nombre de cuenta"
      registerUser.classList.remove("redPlaceholder")
      return 0
    }
    if(!passwordAgain){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      return 0
    }
    if(password.toLowerCase() !== passwordAgain.toLowerCase()){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      passwordRegisterAgain.placeholder = "Las contraseñas son diferentes"
      passwordRegisterAgain.value = ""
      passwordRegisterAgain.classList.add("redPlaceholder")
      return 0
    }
    if(!name){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      passwordRegisterAgain.placeholder = "Repite la contraseña"
      passwordRegisterAgain.classList.remove("redPlaceholder")
      return 0
    }
    if(name.length > 25){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      nameLastnameRegister.value = ""
      nameLastnameRegister.placeholder = "Maximo 25 caracteres"
      nameLastnameRegister.classList.add("redPlaceholder")
      passwordRegisterAgain.classList.remove("redPlaceholder")
      return 0
    }
    if(!email){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      return 0
    }
    if(!validator.isEmail(email)){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      emailRegister.placeholder = "No es un email correcto"
      emailRegister.value = ""
      nameLastnameRegister.classList.remove("redPlaceholder")
      emailRegister.classList.add("redPlaceholder")
      return 0
    }
    if(!!isEmailLogged.length){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      emailRegister.placeholder = "Ya existe una cuenta con este email"
      emailRegister.value = ""
      emailRegister.classList.add("redPlaceholder")
      return 0
    }
    if(!phone){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      phoneRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      passwordRegisterAgain.placeholder = "Email"
      passwordRegisterAgain.classList.remove("redPlaceholder")
      return 0
    }
    if(isNumber === null){
      registerUser.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      nameLastnameRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      emailRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"
      phoneRegister.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
      phoneRegister.placeholder = "Ingrese un numero válido"
      phoneRegister.value = ""
      phoneRegister.classList.add("redPlaceholder")
      return 0
    }

    phoneRegister.style.boxShadow = "0px 0px 5px 1px #AC8DAF"

    await userService.createUser(completeUser)
      .catch(err => console.log(err))

    try{
      const user = await loginService.login({
        logUser: logUser,
        logPassword: password
      })

      setName(user.name)
      setEmail(user.email)
      setToken(user.token)
      setAccess(user.access)

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
        )
        setOpenLoginModal(false)
        body.style.overflowY = "inherit"
      } catch(e){
      console.error(e);
    }
    
    registerUser.value = ''
    passwordRegister.value = ''
    passwordRegisterAgain.value = ''
    nameLastnameRegister.value = ''
    emailRegister.value = ''
    phoneRegister.value = ''
    setUserName(logUser)
    setLogUser()
    setPassword()
    setPasswordAgain()
    setPhone()
  }


export { changeModalState, login, register }