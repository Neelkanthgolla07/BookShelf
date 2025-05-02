import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    let jwt_token = Cookies.get("jwt_token")
    if (!jwt_token) {
        return <Navigate to="/" />
        
    } 
    return children
    
}

export default ProtectedRoute
