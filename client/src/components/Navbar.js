import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice} from "@fortawesome/free-solid-svg-icons"

class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            ham: false
        }
    }

    componentDidMount= () => {
        window.addEventListener("click", (e) => {
            if(e.target.id === "burger" || e.target.parentNode.id === "burger" || e.target.parentNode.parentNode.id === "burger"){
                this.setState(prevState => {
                    return {ham: !prevState.ham}
                })
            }else{
                this.setState({
                    ham: false
                })
            }
        })
    }

    render(){
        return (
            <nav>
                <div className="contact">
                    <h5 className="contactInfo">Call: (801) 555-FSPZ</h5>
                    <h5 className="contactInfo">{"150 South State Street, Salt Lake City, UT 84111"}</h5>
                </div>
                <div>
                    <div className="hamburger" id="burger"><FontAwesomeIcon icon={faPizzaSlice} className="burgerToggle"/></div>
                    <Link to="/" className="linkDiv">Home</Link>
                    <Link to="/menu" className="linkDiv">Menu</Link>
                    <Link to="/order" className="linkDiv">Order</Link>   
                </div>
            </nav>
        )
    }
}

export default withRouter (Navbar)