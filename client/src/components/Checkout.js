import React from "react";
import { Link } from "react-router-dom";

const Checkout = props => {

    return (
        <div>
            <button><Link to="/orderplaced">Place Order</Link></button>
        </div>
    )

}

export default Checkout;