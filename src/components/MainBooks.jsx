import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainBooks = (props) => {
    const { filteredBooks ,Search} = props 
    const navigate = useNavigate()
    
  return (
    <>
      {filteredBooks.filter((book)=>{return book.title.toLowerCase().includes(Search.toLowerCase())}).map((book) => (
          <div key={book.id} onClick={ () => {
            navigate(`/Bookshelves/${book.id}`)
        }} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <img
              src={book.cover_pic}
              alt={book.title}
              className="w-20 h-28 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author_name}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                ⭐ {book.rating}
              </p>
              <p className="text-sm mt-2">
                Status: <span className="text-blue-500">{book.read_status}</span>
              </p>
            </div>
          </div>
        ))}
    </>
  )
}

export default MainBooks
