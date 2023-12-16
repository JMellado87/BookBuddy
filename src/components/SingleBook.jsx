import { Link,useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const SingleBook = ({books, user}) => {

    const params = useParams()
    const id = params.id*1

    const [selectedBook, setSelectedBook] = useState(null);
    const [checkoutError, setCheckoutError] = useState(null);
    const navigate = useNavigate(); 
    
    
    useEffect(() => {
        const book = books.find((book) => book.id === id);
        setSelectedBook(book);
        }, [books, id]);


        const handleCheckout = async () => {
            const loggedInToken = window.localStorage.getItem('token')
            try {
                const response = await axios.patch(
                `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`,
                {
        
                    available: false,
                },
                {
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${loggedInToken}`
                    },
                }
                );
        
                console.log(response.data);
        
                navigate('/account'); 
            } catch (error) {
                console.error('Error checking out the book:', error);
                setCheckoutError('Error checking out the book. Please try again.');
            }
            };    

    if(!selectedBook) {
        return null
    } else {
        const inStock = selectedBook.available ? "Yes" : "No"
        console.log(selectedBook)
        return (
            <div className="singleBookContainer">
                <h1>{selectedBook.title}</h1>
                <h3>Author:  {selectedBook.author}</h3>
                <h3>Available to checkout: | {inStock} |</h3>
                {user.email && (
        <div className='single-book-actions'>
            <button disabled={ selectedBook.available ? false : true } onClick={handleCheckout} className='checkout-button'>Checkout</button>
            </div>
        )}      
        {checkoutError && <div className='checkout-error'>{checkoutError}</div>}
        <br/>
                <Link to='/books'>Back to books</Link> 
                <p>Description:</p>
                <p> {selectedBook.description}</p>
                <img className="singleBookIMG" src={selectedBook.coverimage} /> 
                <br />
                <Link to='/books'>Back to books</Link>      
            </div>
        )
    }

}

export default SingleBook