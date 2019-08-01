import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class OrderPlaced extends Component {

    componentDidMount(){
        localStorage.removeItem("cart");
    }

    componentWillUnmount(){
        localStorage.clear();
    }

    getMinutesByCount = () => {

        try {
            let totalCount = JSON.parse(localStorage.getItem("cart")).reduce((total, curr) => total + curr.count, 0)
            if(totalCount%2 === 0) {
                return (totalCount/2) * 20;
            } else if(totalCount%2 !== 0) {
                if(totalCount -1 === 0)
                    return 20;
                else
                    return ((totalCount - 1)/2) * 20;
            }
        }
        catch {
            return 0;
        }
    }

    getMoment = () => {
        return moment().add(this.getMinutesByCount(), 'minutes').calendar();
    }

    render(){
        return (
            <div className="orderPlacedDiv">
                <p>Full Stack Pizza thanks you for your order.</p>
                <p>Your order has been placed and should be ready {this.getMoment()}.</p>
                <p>Click <Link to="/" className="goHome">here</Link> to return to the home page.</p>
            </div>
        );
    }
}

export default OrderPlaced;