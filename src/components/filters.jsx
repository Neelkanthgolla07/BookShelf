import React,{useState} from 'react'

const filters = (props) => {
    
    let {filters,setSelectedFilter,selectedFilter} =props;
    
    // let filteredBooks =
    // selectedFilter === "All"
    //     ? books
    //     : books.filter((book) => book.status === selectedFilter);
  return (
    <>
      {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full border ${
              selectedFilter === filter
                ? "bg-blue-500 text-white"
                : "text-blue-600 border-blue-400"
            }`}
          >
            {filter}
          </button>
        ))}
    </>
  )
}

export default filters
