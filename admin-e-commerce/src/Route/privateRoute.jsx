import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const PrivateRoute = () => {
    const navigate = useNavigate()
    let auth = localStorage.getItem('token')

  return (
    <>
    {auth?
    <div>
      <Header/>
<Outlet/>
    </div>
    :<Navigate to='/login'/>}</>
  )
}

export default PrivateRoute;
