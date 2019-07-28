import React from "react";

const OrderPlaced = () => {

    const get12HourFormat = d => {
        if(d.getHours() > 12)
            return d.getHours() - 12;
        else if (d.getHours === 0)
            return 12;
        else
            return d.getHours();
    }

    const getMonth = d => {
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

    const getDayOfYear = () => {
        let d = new Date();
        d.setMinutes(d.getMinutes() + 30);
        let month = getMonth(d);
        let day = d.getDate();

        return `${month} ${day}`
    }

    const getTimeOfDay = () => {

        let d = new Date();
        d.setMinutes(d.getMinutes() + 30);
        let suffix = d.getHours() >= 12 ? 'PM' : "AM";
        let hour = get12HourFormat(d);
        let minutes = d.getMinutes();

        return `${hour}:${minutes} ${suffix}`;
    }

    return (
        <div>
            <p>Your order has been placed and should be ready on {getDayOfYear()} by {getTimeOfDay()}.</p>
        </div>
    );
}

export default OrderPlaced;