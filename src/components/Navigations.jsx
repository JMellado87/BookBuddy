import { Link } from "react-router-dom"

const Navigations = ({user}) => {
    
    
    return (
        <nav>
            <Link to='/homepage'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/books'>Books</Link>
            
            {
                user.email ? (
                    <span>
                        <Link to="/account">User</Link>
                    </span>
                
                ) : (
                    
                    <span>
                        <Link to="/login">Login</Link>
                        <Link to='/register'>Register</Link>
                    </span>
                )
            }
        </nav>
    )
}

export default Navigations