import React from "react";
import { Link } from "react-router-dom";

const Order = props => {

    return (
        <div>
            <button><Link to="/checkout">Checkout Order</Link></button>
        </div>
    )
}

export default Order;