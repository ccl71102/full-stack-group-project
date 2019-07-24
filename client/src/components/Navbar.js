import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav>
            <div className="contact">
                <h5 className="contactInfo">Call: (111) 222 3333</h5>
                <h5 className="contactInfo">Address: 7th Main 20W</h5>
            </div>
            <div>
                <Link to="/" className="linkDiv">Home</Link>
                <Link to="/menu" className="linkDiv">Menu</Link>
                <Link to="/about" className="linkDiv">About</Link>   
            </div>
        </nav>
    )
}

export default withRouter (Navbar)