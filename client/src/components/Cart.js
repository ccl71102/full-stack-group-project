import React, { Component } from "react";
import axios from "axios";


class Cart extends Component {

    constructor(){
        super();
        console.log(JSON.parse(localStorage.getItem("cart")) )
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            pizzas: []
        };
    }

    componentDidMount(){
        if(localStorage.getItem("cart")){
            
            axios.get("/pizza")
            .then(res => {
                console.log(res.data)
                this.setState({
                    pizzas: this.state.cart.map(order => {
                        const foundPizza = res.data.filter(pizza => pizza._id === order._id)
                        const [pizza] = foundPizza
                        return pizza
                    })
                })

            })
            .catch(err => console.log(err));
        }
    }

    handleRoute = route => {
        this.props.history.push(route);
    }

    increaseCount = _id => {
        this.setState({
            cart: this.state.cart.map(order => {
                if(order._id === _id)
                    return ({
                        _id: _id,
                        count: order.count + 1
                    })
                else
                    return order        
            }
            )
        }, () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));
        
    }

    decreaseCount = _id => {

        if(this.state.cart.find(order => order._id === _id).count > 1){
            this.setState(prevState => ({
                cart: prevState.cart.map(order => {
                    if(order._id === _id) {
                        return ({
                            _id: _id,
                            count: order.count - 1
                        })
                    }
                    else
                        return order;
                    }
            )}), () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));

        } else {
            this.setState({
                cart: this.state.cart.filter(order => order._id !== _id),
                pizzas: this.state.pizzas.filter(pizza => pizza._id !== _id)
            }, () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));
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
                <button className="orderAmont" onClick={() => this.increaseCount(pizza._id)}>Add</button>
                <button className="orderAmont" onClick={() => this.decreaseCount(pizza._id)}>Remove</button>
            </div>);

        return(
            <div className="cartDiv">
                <h1>Your Cart</h1>
                <div className="emptyCart">{mappedOrder.length !== 0 ? mappedOrder : "Your cart is lonely. :( "}</div>
                <div>
                    <button className="placeOrder" onClick={this.state.pizzas.length !== 0 ? () => this.handleRoute("/order") : () => this.handleRoute("/menu")}>{this.state.pizzas.length !== 0 ? "Proceed To Order Page" : "Go Back To Menu"}</button>
                </div>
            </div>
        );
    }

}

export default Cart;