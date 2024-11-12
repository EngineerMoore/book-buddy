import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Inventory = () => {
  const [bookLibrary, setBookLibrary] = useState([])
  
  useEffect(()=>{
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
        const allBooksObject = await response.json();
        console.log(allBooksObject);
        const allBooks = allBooksObject.books;
        console.log(allBooks);
        const allBooksSorted = allBooks.sort((a,b)=> a.title.localeCompare(b.title))
        setBookLibrary(allBooksSorted)
      }catch(error){console.error(error.message)}
    }
    fetchBooks()
  },[])
  return (
    <>
      <h1>Book Buddy</h1>
      <h2>Inventory</h2>
      <ul>
        {bookLibrary.map( (book) => {
          return <li
            key={book.id}
            onClick={()=>{ return <h2>hi</h2>}}
            >
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li> })}
      </ul>
    </>
  )
}
export default Inventory