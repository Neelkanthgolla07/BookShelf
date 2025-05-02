import React,{useState} from 'react'
import { useEffect } from 'react' 
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Cookies from 'js-cookie'
import Logo from '../assets/Group.png'

const HomePage = () => {
  const [fetching, setFetching] = useState(false)
  const [Homebooks, setHomeBooks] = useState([])
  const navigate = useNavigate()
  const jwt_token = Cookies.get("jwt_token")

  // const [menuOpen, setMenuOpen] = useState(false);
  const toBookSheleves = () => {
        // Handle logout logic here
        navigate("/Bookshelves")
  };
  const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${jwt_token}`,
        'Content-Type': 'application/json'
    }
  }
  let getHomeBooks= async ()=>{
      let response = await fetch(`https://apis.ccbp.in/book-hub/top-rated-books`,options)
      let data = await response.json()
      // console.log(data.books)
      setHomeBooks(data.books ||[])
      console.log(data.books)
      setFetching(false)
  }
  useEffect(() => {
    setFetching(true)
    getHomeBooks()
  }, [])






  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <Header/>


      {/* Main Section */}
      <main className="flex-1 mt-10 p-4 md:p-10 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Find Your Next Favorite Books?
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mb-6">
          You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.
        </p>
        <button onClick={toBookSheleves} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-8">
          Find Books
        </button>

        {/* Top Rated Books Section */}
        <section className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">Top Rated Books</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {/* Book Card */}
            {fetching?  (<div className='text-center text-6xl m-5 flex flex-col justify-center'>Loading...</div>) :(Homebooks.map((book) => (
              <div key={book.id}  onClick={ () => {
                navigate(`/Bookshelves/${book.id}`)
            }}  className="flex-shrink-0 w-60 bg-white shadow rounded-lg overflow-hidden">
                <img src={book.cover_pic} alt={book.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="text-gray-500 text-sm">{book.author_name}</p>
                </div>
              </div>
            )))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
