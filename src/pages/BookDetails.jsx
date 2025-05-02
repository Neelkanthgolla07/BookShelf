import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const BookDetails = () => {
    const navigate = useNavigate()
    const [fetching, setFetching] = useState(false)
    const [bookDetails, setBookDetails] = useState({})
    const { id } = useParams()
    const jwt_token = Cookies.get("jwt_token")
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt_token}`,
            'Content-Type': 'application/json'
        }
    }
    const fetchBookDetails = async () => {
        try {
            const response = await fetch(`https://apis.ccbp.in/book-hub/books/${id}`, options)
            if (!response.ok) {
                navigate("/*")
            }
            const data = await response.json()
            console.log(data)
            setBookDetails(data.book_details)
        } catch (error) {
            console.error('Error fetching book details:', error)
        }
        setFetching(false)
    }
    useEffect(() => {
        setFetching(true)
        fetchBookDetails()
    }, [])

  return (
    <>
      <Header />
      {fetching ? 
         (<div className='text-center text-6xl m-5 flex flex-col justify-center'>Loading...</div>): (
        <div className="max-w-md md:max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-4">
          {/* <!-- Book Image --> */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={bookDetails.cover_pic} alt="Book Cover" className="w-40 h-auto rounded-lg object-cover" />
          </div>

          {/* <!-- Book Details --> */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">{bookDetails.title}</h2>
              <p className="text-sm text-gray-600">{bookDetails.author_name}</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 text-sm font-medium">{bookDetails.rating}</span>
              </div>
              <p className="text-sm text-blue-600 mt-1">Status: <a href="#" className="underline">{bookDetails.read_status}</a></p>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold">About Author</h3>
              <p className="text-sm text-gray-700 mt-1">
                {/* <!-- Author content goes here --> */}
                {bookDetails.about_author}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold">About Book</h3>
              <p className="text-sm text-gray-700 mt-1">
                {/* <!-- Book content goes here --> */}
                {bookDetails.about_book}
              </p>
            </div>
          </div>
      </div>
  )}
      
      <Footer />
    </>
  )
}

export default BookDetails
