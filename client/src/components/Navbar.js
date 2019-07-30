import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faShoppingCart, faHome, faMoneyCheck, faClipboardList} from "@fortawesome/free-solid-svg-icons"

class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            ham: false
        }
    }

    componentDidMount= () => {
        window.addEventListener("click", (e) => {
            if(e.target.id === "burger" || (e.target.parentNode && e.target.parentNode.id === "burger") || (e.target.parentNode.parentNode && e.target.parentNode.parentNode.id === "burger")){
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
            <div>
                <div className={`dropDown-${this.state.ham}`}>
                    <Link to="/" className="dropLink">Home</Link>
                    <Link to="/menu" className="dropLink">Menu</Link>
                    <Link to="/cart" className="dropLink">Cart</Link>
                    <Link to="/order" className="dropLink">Order</Link> 
                </div>
                <nav>
                    <div className="contact">
                        <h5 className="contactInfo">Call: (801) 555-PZZA</h5>
                        <h5 className="contactInfo">150 South State Street, Salt Lake City, UT 84111</h5>
                    </div>
                    <div>
                        <div className="hamburger" id="burger"><FontAwesomeIcon icon={faPizzaSlice} className="burgerToggle"/></div>
                        <Link to="/" className="linkDiv">Home<FontAwesomeIcon icon={faHome}/></Link>
                        <Link to="/menu" className="linkDiv">Menu<FontAwesomeIcon icon={faClipboardList}/></Link>
                        <Link to="/cart" className="linkDiv">Cart<FontAwesomeIcon icon={faShoppingCart}/></Link>
                        <Link to="/order" className="linkDiv">Order<FontAwesomeIcon icon={faMoneyCheck}/></Link>   
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter (Navbar)