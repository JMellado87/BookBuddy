import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Books = ({books}) => {

    return(
        <div>

            <h1>Books</h1>
            <h3>Catalog of Titles</h3>
            
            <br />
            <div className="bookNavBar">
                <span className="bookNavContentImage">Cover</span>
                <span className="bookNavContentTitle">Title</span>
                <span className="bookNavContentAuthor">In Stock?</span>
                <span className="bookNavContentAvailability">Author</span>
            </div>
            { books.map((book) => {
                const inStock = book.available ? "yes" : "no"
                return (
                    <span  key={book.id} className="bookContainer">
                        <img src={book.coverimage} className="coverimage"/>
                        <Link className="booksOverlook" to={`/books/${book.id}`}>{book.title}</Link>
                        <h3 className="booksOverlook">{inStock}</h3>
                        <h3 className="booksOverlook">{book.author}</h3>
                    </span>

                )
            }
            )}
        </div>
    )
}

export default Books