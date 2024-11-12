import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleBook = () => {
  const { bookId } = useParams();
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() => {
    const getSingleBook = async () => {
      try{
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
        const bookInfoObject = await response.json();
        console.log(bookInfoObject);
        const bookInfo = bookInfoObject.book
        console.log(bookInfo);
        setSelectedBook(bookInfo);
      }catch(error){console.error(error.message)}
    }
    getSingleBook();
  },[])

  return (
    <>
      <h2>{selectedBook.title}</h2>
      <h3>Written by: {selectedBook.author}</h3>
      <p>{selectedBook.description}</p>
    </>
  )
}
export default SingleBook