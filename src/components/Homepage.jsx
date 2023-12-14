import SearchBar from "./SearchBar"

const Homepage = ({books}) => {
    return(
        <div>
            
            <h2>Welcome to our library!</h2>
                <SearchBar books = {books}/>
        </div>
    )
}

export default Homepage