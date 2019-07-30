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
                <p>{`${this.getSizeString(pizza.size)} ${pizza.title} (${this.state.cart.find(order => order._id === pizza._id).count})`}</p>
            </div>);

        return(
            <div>
                <h1>Order Summary</h1>
                <div>{mappedOrder}</div>
                <div>
                    <p>Name: {localStorage.getItem("name")}</p>
                    <p>Email Address: {localStorage.getItem("email")}</p>
                    <p>Phone Number: {localStorage.getItem("phone")}</p>
                </div>
                <button onClick={() => this.handleRoute("/order")}>Back To Order Page</button>
                <button onClick={() => this.handleRoute("/orderplaced")}>Place Order</button>
            </div>
        );
    }

}

export default Checkout;