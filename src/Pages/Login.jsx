import React, { useEffect, useState } from "react"
import loginService from '../Services/login'

const Login = () =>{

  const [userName, setUserName] = useState('')
  const [password, setPasword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() =>{
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if(loggedUserJSON){
      const user = JSON.stringify(loggedUserJSON)
      setUser(user)
      console.log("Ya estas logeado");
    }
  }, [])

  const handleLogin = async (event) =>{
    event.preventDefault()

    try{
      const user = await loginService.login({
        userName,
        password
      })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      console.log("dsa");

      setUser(user)
      setUserName('')
      setPasword('')
    } catch(e){
      console.error('Error');
    }
  }

  const handleLoginOut = () =>{
    setUser(null)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return(
    <>
      <div className="formLogin">
        <form onSubmit={handleLogin}>
          <div>
            <input
            type="text"
            value={userName}
            name='userName'
            placeholder='userName'
            onChange={({target}) => setUserName(target.value)}
            />
          </div>
          <div>
            <input
            type="password"
            value={password}
            name='password'
            placeholder='password'
            onChange={({target}) => setPasword(target.value)}
            />
          </div>
          <div>
            <button>
              Login
            </button>
          </div>
          <div>
            <button onClick={handleLoginOut}>
              LogOut
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export { Login }