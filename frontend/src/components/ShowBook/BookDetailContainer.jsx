import { useEffect, useState } from "react"
import Banner from "./Banner"
import BookDetails from "./BookDetails"
import { useParams } from "react-router"

const BookDetailContainer = () => {
    const [showBookDetails, setShowBookDetails] = useState({});
    const {id} = useParams()
    console.log(showBookDetails)
    useEffect(()=> {
      const fetchBookDetail = async() => {
        const fetchSingleBook = await fetch(`https://appsail-50037828679.development.catalystappsail.in/api/books/${id}`)
        const data = await fetchSingleBook.json()
        console.log(data)
        setShowBookDetails(data)
      }
      fetchBookDetail()
    },[])
    return(
    <div className='grid grid-cols-3 gap-x-5 p-10 h-screen'>
      <Banner showBookDetails={showBookDetails}/>
      <BookDetails showBookDetails={showBookDetails}/>
    </div>
    )
}

export default BookDetailContainer
