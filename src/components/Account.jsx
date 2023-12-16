
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Account = ({user, setUser, setToken, token, books}) => {
    const [checkedOutBooks, setCheckedOutBooks] = useState([])
    const [returnError, setReturnError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCheckedOutBooks = async () => {
            const loggedInToken = window.localStorage.getItem('token')
            try {
            const response = await axios.get(
                'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations',
                {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${loggedInToken}`,
                },
                }
            );
                console.log(response)
            setCheckedOutBooks(response.data.reservation); // Corrected this line
            
            } catch (error) {
            console.error('Error fetching checked-out books:', error);
            
            }
        };
    
        fetchCheckedOutBooks();
        }, [token]);
    
        const handleReturn = async (reservationId) => {
        const loggedInToken = window.localStorage.getItem('token')
        try {
            const response = await axios.delete(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
            
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
                },
            }
            );
    
            console.log(response.data);
    
            navigate('/books');
        } catch (error) {
            console.error('Error returning the book:', error);
            setReturnError('Error - Please try again.');
        }
        };


    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/homepage')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div className="accountMain">
            <h1>Account</h1>
            <h2>User: {user.firstname}</h2>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <div>
        
        <h2>Checked Out Books</h2>
        <ul>
            {checkedOutBooks.map((book) => (
            <li key={book.id}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <button onClick={() => handleReturn(book.id)}>Return Book</button>
                <br/>
                <br/>
                <Link to='/books'>Back to books</Link> 
            </li> 
            ))}
        </ul>
        </div>
            
        </div>
    )
}

export default Account