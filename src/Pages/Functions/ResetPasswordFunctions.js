const handleSubmit = (
  event,
  newPassword,
  passwordAgain,
  setResetPasswordRegister,
  passwordRegisterAgain,
  id,
  token,
  resetPasswordService,
  msjError
  ) =>{
  event.preventDefault()

  if(!newPassword){
    setResetPasswordRegister(false)
    return 0
  }
  if(!passwordAgain){
    setResetPasswordRegister(true)
    passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    return 0
  }
  if(newPassword.toLowerCase() !== passwordAgain.toLowerCase()){
    setResetPasswordRegister(true)
    passwordRegisterAgain.style.boxShadow = "0px 0px 5px 1px #bb3b3b"
    passwordRegisterAgain.placeholder = "Las contraseñas son diferentes"
    passwordRegisterAgain.value = ""
    passwordRegisterAgain.classList.add("redPlaceholder")
    return 0
  }

  const userEmail = {
    id: id,
    token: token,
    password: newPassword
  }

  resetPasswordService.resetPassword(userEmail)
    .then(() =>{
      window.location.replace('https://monicadeco.com/');
    })
    .catch(() =>{
      msjError.innerHTML = "El link ha expirado, vuelve a intentarlo."
    })
}

export { handleSubmit }