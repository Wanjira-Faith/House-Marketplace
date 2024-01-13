import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

function PrivateRoute() {
    const loggedIn = false
    
  return loggedIn ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute