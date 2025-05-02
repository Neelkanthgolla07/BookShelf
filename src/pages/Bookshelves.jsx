import React,{use, useState} from 'react'
import { useEffect } from 'react' 
import Header from '../components/Header'   
import Footer from '../components/Footer'   
import Slider from '../components/slider'
import MainSection from '../components/MainSection'
import Cookies from 'js-cookie'
const Bookshelves = () => {
    const filters = ["All", "Read", "Currently Reading", "Want To Read"];
      
    const [fetching, setFetching] = useState(false)
    
    const [selectedFilter, setSelectedFilter] = useState("All");


    const [books, setBooks] = useState([])
    let jwt_token = Cookies.get("jwt_token")
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt_token}`,
            'Content-Type': 'application/json'
        }
    }
    let getBooks= async ()=>{
        let response = await fetch(`/api/book-hub/books?shelf=ALL&search=`,options)
        let data = await response.json()
        // console.log(data.books)
        setBooks(data.books ||[])
        console.log(data.books)
        setFetching(false)
    }
    useEffect(() => {
      setFetching(true)
      getBooks()
    }, [])







  // const books = [
  //       {
  //         title: "The Beginning of Everything",
  //         author: "Robyn Schneider",
  //         rating: 4.5,
  //         status: "Read",
  //         image: "/path/to/beginning.jpg",
  //       },
  //       {
  //         title: "In to the Dark",
  //         author: "Claudia Gray",
  //         rating: 4.5,
  //         status: "Currently Reading",
  //         image: "/path/to/dark.jpg",
  //       },
  //       // Add more books here...
  //     ];

    

    let filteredBooks =
    selectedFilter === "All"
        ? books
        : books.filter((book) => book.read_status === selectedFilter);
    console.log(filteredBooks)


    // useEffect(() => {
    //   books.forEach(element => {
    //     console.log("Selected Filter:", selectedFilter,element.read_status);
    //   });
      
    // }, [selectedFilter])
    // useEffect(() => {
    //   filteredBooks =
    //   selectedFilter === "All"
    //     ? books
    //     : books.filter((book) => book.status === selectedFilter);
    //   console.log(filteredBooks)
    // }, [selectedFilter])

  return (
    <>
      <Header/>
      <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-8 bg-gray-50">
          <Slider filters={filters} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          <MainSection fetching={fetching} filteredBooks={filteredBooks} />
      </div>

      <Footer/>
    </>
  )
}

export default Bookshelves
