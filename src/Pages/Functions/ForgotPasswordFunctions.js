const handleSubmit = (
  event,
  forgotPasswordEmail,
  forgotPasswordMsjInput,
  setForgotPasswordMsjInput,
  forgotPasswordService,
  setForgotPasswordEmail
  ) =>{

  let msjSuccess = document.querySelector("#success")
  let msjButton = document.querySelector("#button")

  event.preventDefault()
  if(forgotPasswordEmail){
    setForgotPasswordMsjInput({placeholder: "Email", boxShadow: true, redPlaceholder: false})
    const userEmail = {
      emailPassword: forgotPasswordEmail
    }

    forgotPasswordService.createForgotPassword(userEmail)
      .then(() =>{
        msjSuccess.innerHTML = "Revisa tu correo electrónico. Si no recibes nada dentro de cinco minutos vuelve a intentarlo."
        msjButton.innerHTML = "Correo enviado"
        msjButton.setAttribute("disabled","")
      })
      .catch((err) =>{
        const forgotPasswordAux = { ...forgotPasswordMsjInput }
        forgotPasswordAux.placeholder = `${err.response.data.message}`
        setForgotPasswordMsjInput(forgotPasswordAux)
      })
  }else{
    const forgotPasswordAux = { ...forgotPasswordMsjInput }
    forgotPasswordAux.placeholder = "Ingresa un email"
    forgotPasswordAux.boxShadow = false
    forgotPasswordAux.redPlaceholder = true
    setForgotPasswordMsjInput(forgotPasswordAux)
  }
  setForgotPasswordEmail()
}

export { handleSubmit }