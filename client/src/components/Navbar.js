import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav>
            <div className="contact">
                <h5 className="contactInfo">Call: (801) 555-FSPZ</h5>
                <h5 className="contactInfo">{"150 South State Street, Salt Lake City, UT 84111"}</h5>
            </div>
            <div>
                <Link to="/" className="linkDiv">Home</Link>
                <Link to="/menu" className="linkDiv">Menu</Link>
                <Link to="/order" className="linkDiv">Order</Link>   
            </div>
        </nav>
    )
}

export default withRouter (Navbar)