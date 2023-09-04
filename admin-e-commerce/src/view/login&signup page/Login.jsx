import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AxiosClient from '../../webservices/getWay'
import { WebUrls } from '../../webservices/urls'


const Login = () => {
  const navigate = useNavigate()
  const [username, setuserName] = useState("")
  const [password, setPassword] = useState("")
  const [loginData, setLoginData] = useState()
  const [loading, setLoding] = useState(false)
  const [LoginFailed, setLoginFailed] = useState()

  console.log(loginData);

  const login = async (e) => {
  setLoding(true)
    try {

      // var requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     "email": username,
      //     "password": password
      //   }),
      //   redirect: 'follow'
      // };

      // fetch("http://apps.codebetter.in:8082/emall/user/login", requestOptions)
      //   .then(response => response.json())
      //   .then(result => {
      //     setLoding(false)
      //     if (result.status) {
      //       setLoginData(result)
      //       localStorage.setItem('token', result.token)
      //       navigate('/')
      //     } else {
      //      setLoginFailed(result)
      //     }

      //   })

      let data = JSON.stringify({
            "email": username,
            "password": password
          })

    let response = await AxiosClient.post(WebUrls.login,data)

    if(response.status===200){
      setLoginData(response.data)
            localStorage.setItem('token', response.data.token)
            navigate('/')
    }

    } catch (err) {
      console.log(err);
    }
    e.preventDefault()
  }

  useEffect(()=>{
   if(window.location.pathname==="/login"){
   localStorage.removeItem('token')
   }
  },[])

  console.log(window.location.pathname);

  return (
    <>
      <div className="container mt-3">
        <h2>Stacked form</h2>
        <form >
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" />
              Remember me
            </label>
          </div>
          {loading ? <div className="spinner-border" role="status">
          </div> : <button type='submit' onClick={login} className="btn btn-primary">
            Submit
          </button>}
        </form>
        <h3 className='text-danger'>{LoginFailed?.msg}</h3>
      </div>
    </>
  )
}

export default Login
