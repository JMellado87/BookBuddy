import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = ({books}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = books.filter((book) => {
        return book.title.indexOf(searchTerm) !== -1
    })

    return(
        <div className='searchBar'>
            
            <br/>
            <label >
                <h5>Search for titles:</h5>
                <span >   
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
                
                </span>
            </label>
            {
                searchTerm.length > 0 ?
                    <div>
                        <h3>There are {filteredTerms.length} of {books.length} books that meet these search requirements</h3>
                        <ul>
                            {
                                filteredTerms.map((book) => {
                                    return (
                                        <li key={book.id}>
                                            <Link to={`/books/${book.id}`}>
                                                {book.title}    
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                : null
            }
        </div>
    )
}

export default SearchBar