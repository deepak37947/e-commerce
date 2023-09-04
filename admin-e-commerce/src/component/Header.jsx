import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
        <h1> ma hu header</h1>
      <button className='btn btn-danger' onClick={logout}>Log Out</button>
        </>
    )
}

export default Header
