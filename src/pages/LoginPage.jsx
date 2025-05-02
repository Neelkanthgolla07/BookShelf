import React,{useState } from 'react'
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from '../assets/Group.png'
import Ellipse from '../assets/Ellipse.png'
import Rectangle from '../assets/Rectangle.png'
const LoginPage = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const url="https://apis.ccbp.in/login"

    let userDetails={
      username,
      password
    }
     
    console.log(userDetails)  
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    
    let Autherise=async (e) => {
        console.log("Login button clicked")
        console.log(username  , password)
        try{
          let response= await fetch(url, options)
          let data= await response.json()
          // console.log(data)

          
          if (data.status_code !== 400) {
            Cookies.set("jwt_token", data.jwt_token);
            navigate("/home")
            
          }
          else{
            alert("Invalid username or password")
            navigate("/")
          }

        }catch{
          console.error("Error:", error)
          alert("An error occurred. Please try again.")
        }
        // fetch(url, options)
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data)
        //     navigate("/home")
        // })
        // .catch((error) => { 
        //     console.error("Error:", error)
        //     alert("An error occurred. Please try again.")
        // })
        // console.log(userDetails)  
    }


  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()} className="h-screen">
        <div className="md:flex h-full">
          {/* Left side with image */}
          <div className="md:w-1/2 flex items-center justify-center"> 
            <img className='md:hidden' src={Ellipse} alt="Mobile decoration" />
            <img className='hidden h-full w-full object-cover md:block' src={Rectangle} alt="Desktop decoration" />
          </div>
          
          {/* Right side with form */}
          <div className='md:w-1/2 flex flex-col items-center justify-center px-4'>
            <div className='w-full max-w-md space-y-4'>
              <div className='flex justify-center mb-6'>
                <img src={Logo} alt="Logo" className='h-12' />
              </div>
              
              <div className='space-y-4'>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username*</label>  
                  <input 
                    id="username" 
                    onChange={(e)=>setUsername(e.target.value)} 
                    className="w-full border rounded-md p-2" 
                    type="text" 
                    placeholder="Username" 
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                  <input 
                    id="password" 
                    onChange={(e)=>setPassword(e.target.value)}  
                    className="w-full border rounded-md p-2"  
                    type="password" 
                    placeholder="Password" 
                    required
                  />
                </div>
                
                <div>
                  <button 
                    onClick={Autherise} 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"  
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginPage
