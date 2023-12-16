

const Homepage = ({user}) => {
    
    return(
        <div className="homeContainer">
            
            <h1>{ user.firstname ? `Welcome back, ${user.firstname}!` : 'Welcome to our library!'}</h1>
            <br/>
            <p> Word of wisdom: Kindness is free to give but at the same time one of the most valuable thing one can receive...It does not collect interest if saved up and not used. Best gift you can give is unconditional kindness because that is what you desire... embody the behaviours you want to see in others because a society without kindness is no society at all     " some athiest, not that long ago "</p>
            <br/>
        </div>
    )
}

export default Homepage