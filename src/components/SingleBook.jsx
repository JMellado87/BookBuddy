import { Link,useParams } from 'react-router-dom';


const SingleBook = ({books}) => {

    const params = useParams()
    const id = params.id*1

    const book = books.find((book) => {
        return book.id === id
    })

    if(!book) {
        return null
    } else {
        const inStock = book.available ? "Yes" : "No"
        console.log(book)
        return (
            <div className="singleBookContainer">
                <h1>{book.title}</h1>
                <h3>Author:  {book.author}</h3>
                <h3>Available to checkout: | {inStock} |</h3>
                <Link to='/books'>Back to books</Link> 
                <p>Description:</p>
                <p> {book.description}</p>
                <img className="singleBookIMG" src={book.coverimage} /> 
                <br />
                <Link to='/books'>Back to books</Link>      
            </div>
        )
    }

}

export default SingleBook