import React ,{useState}from 'react'
import { Menu, X, Instagram, Twitter, Youtube } from "lucide-react";
import { useNavigate,Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from '../assets/Group.png'
const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLogout = () => {
            // Handle logout logic here
            Cookies.remove("jwt_token")
            navigate("/")
            
            
    };
  return (
    <nav className="relative">
        <header className="fixed w-full px-9 py-2 flex justify-between top-0 z-50 bg-white shadow-md">
          <div className="flex items-center">
            <img src={Logo} alt="BookHub Logo" className="h-8 ml-2" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
              <Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link to="/bookshelves" className="text-gray-700 hover:text-blue-500">Bookshelves</Link>
              <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  Logout
                </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </header>
        {/* Spacer div to prevent content overlap */}
        <div className="h-16"></div>
        
        {/* Mobile menu - Updated positioning */}
        {menuOpen && (
            <div className="absolute top-full left-0 right-0 w-full bg-white shadow-md md:hidden z-40">
                <div className="flex flex-col py-2">
                    <Link to="/home" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Home
                    </Link>
                    <Link to="/bookshelves" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Bookshelves
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="mx-4 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Header
