import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderPlaced extends Component {

    componentDidMount(){
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

    getDayOfYear = () => {
        let d = new Date();
        d.setMinutes(d.getMinutes() + 30);
        let month = this.getMonth(d);
        let day = d.getDate();

        return `${month} ${day}`
    }

    getTimeOfDay = () => {

        let d = new Date();
        d.setMinutes(d.getMinutes() + 30);
        let suffix = d.getHours() >= 12 ? 'PM' : "AM";
        let hour = this.get12HourFormat(d);
        let minutes = d.getMinutes();

        return `${hour}:${minutes} ${suffix}`;
    }

    render(){
        return (
            <div>
                <p>Your order has been placed and should be ready on {this.getDayOfYear()} by {this.getTimeOfDay()}.</p>
                <p>Click <Link to="/">here</Link> go return to the home page.</p>
            </div>
        );
    }
}

export default OrderPlaced;