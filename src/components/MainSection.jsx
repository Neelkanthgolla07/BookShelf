import React,{useState} from 'react';
import MainBooks from './MainBooks';  
import { Search } from 'lucide-react';
const MainSection = ({ filteredBooks,fetching }) => {
    if (!filteredBooks || filteredBooks.length === 0) {
      if (fetching) {
        return <div className="flex-1">Loading...</div>;
      }else{
        return <div className="flex-1">No books found</div>
      }
    }
    const [Search, setSearch] = useState('')
  return (
    
    <div className="flex-1">
      <div className="relative mb-6">
        <input
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full md:w-1/2 p-2 pl-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MainBooks filteredBooks={filteredBooks} Search={Search}/>
        {/* {filteredBooks.map((book) => (
          <div key={book.id} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
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
        ))} */}
      </div>
    </div>
  );
};

export default MainSection;