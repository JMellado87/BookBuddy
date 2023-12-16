import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"


const Books = ({books}) => {

    return(
        <div className="booksmain">

            <h1>Books</h1>
            <h3>Catalog of Titles</h3>
            <p>Number of titles in Library {books.length} </p>
            <SearchBar books={books} />
            <br/>
            <ul className="bookcontainerMain" >
            {books.map((book) => {
                const inStock = book.available ? "Available" : "Not Available"
                return (
                                <li key={book.id} className="bookContainer">
                                <Link  to={`/books/${book.id}`}>
                                <h4>{book.title}</h4></Link>
                                <img  src={book.coverimage} className="coverimage"/>
                                <p className={ inStock === "Available" ?  "inStockBox1" : "inStockBox2" } > {inStock}</p>
                                </li>
                            

                )})} </ul>  
                
          </div>
    )
}

export default Books