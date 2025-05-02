import React from 'react'
import Filters from './filters' 
const slider = (props) => {
    let { filters, selectedFilter, setSelectedFilter } = props;
  return (
    <>
        <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Bookshelves</h2>
            <div className="flex md:flex-col gap-2">
                <Filters filters={filters} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </div>
        </div>
    </>
  )
}

export default slider
