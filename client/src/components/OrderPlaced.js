import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderPlaced extends Component {

    componentWillUnmount(){
        localStorage.clear();
    }

    get12HourFormat = d => {
        if(d.getHours() > 12)
            return d.getHours() - 12;
        else if (d.getHours === 0)
            return 12;
        else
            return d.getHours();
    }

    getMonth = d => {
        const months = [ "January", 
                            "February", 
                            "March", 
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"];
        return months[d.getMonth()];
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

    getDayOfYear = () => {
        let d = new Date();
        let minutesToAdd = this.getMinutesByCount()
        if(minutesToAdd !== 0) {
            d.setMinutes(d.getMinutes() + minutesToAdd); 
        }     
        let month = this.getMonth(d);
        let day = d.getDate();

        return `${month} ${day}`
    }



    getTimeOfDay = () => {

        let d = new Date();
        let minutesToAdd = this.getMinutesByCount()
        if(minutesToAdd !== 0) {
            d.setMinutes(d.getMinutes() + minutesToAdd); 
        }     
        let suffix = d.getHours() >= 12 ? 'PM' : "AM";
        let hour = this.get12HourFormat(d);
        let minutes = d.getMinutes();

        return `${hour}:${minutes} ${suffix}`;
    }

    render(){
        return (
            <div className="orderPlacedDiv">
                <p>Full Stack Pizza thanks you for your order.</p>
                <p>Your order has been placed and should be ready on {this.getDayOfYear()} by {this.getTimeOfDay()}.</p>
                <p>Click <Link to="/" className="goHome">here</Link> to return to the home page.</p>
            </div>
        );
    }
}

export default OrderPlaced;