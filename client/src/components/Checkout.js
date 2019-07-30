import React, { Component } from "react";
import axios from "axios";

class Checkout extends Component {

    constructor(){
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            pizzas: []
        };
    }

    handleRoute = route => {
        this.props.history.push(route);
    }

    componentDidMount(){
        if(localStorage.getItem("cart")){
            
            axios.get("/pizza")
            .then(res => {
                console.log(res.data)
                this.setState({
                    pizzas: this.state.cart.map(order => {
                        const foundPizza = res.data.filter(pizza => pizza._id === order._id);
                        const [pizza] = foundPizza;
                        return pizza;
                    })
                })

            })
            .catch(err => console.log(err));
        }
    }

    getSizeString = size => {
        if(size === "12")
            return "Small"
        else if(size === "14")
            return "Medium"
        else if(size === "16")
            return "Large"
        else
            return "Unknown"
    }

    render(){

        const mappedOrder = this.state.pizzas.map(pizza => <div key={pizza._id}>
                <p>{`${this.getSizeString(pizza.size)} ${pizza.title} (${this.state.cart.find(order => order._id === pizza._id).count}) - $${(pizza.price * (this.state.cart.find(order => order._id === pizza._id).count)).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2})}`}</p>
            </div>);

        const orderTotal = this.state.pizzas.reduce((total, curr) => total + curr.price * this.state.cart.find(order => order._id === curr._id).count, 0);
        let phone = (localStorage.getItem("phone"));

        return(
            <div className="checkoutDiv">
                <h1>Order Summary</h1>
                <div>{mappedOrder}</div>
                <p>UT Sales Tax: ${(orderTotal * 0.0775).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p>Order Total: ${(orderTotal + (orderTotal * 0.0775)).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2})}</p>
                <div>
                    <p>Name: {localStorage.getItem("name")}</p>
                    <p>Email Address: {localStorage.getItem("email")}</p>
                    <p>Phone Number: {localStorage.getItem("phone") ? `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6,10)}` : "" }</p>
                </div>
                <div>
                    <button onClick={() => this.handleRoute("/order")} className="chekoutButtons">Back To Order Page</button>
                    <button onClick={() => this.handleRoute("/orderplaced")} className="chekoutButtons">Place Order</button>
                </div>
            </div>
        );
    }

}

export default Checkout;