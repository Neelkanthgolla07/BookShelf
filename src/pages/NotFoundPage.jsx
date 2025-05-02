import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl" >Page Not Found</h1>
        <button className="bg-blue-500 text-white m-3 py-1 px-2 rounded " onClick={()=>{navigate("/home")}} >Back to Home</button>
      </div>
    </>
  )
}

export default NotFoundPage
