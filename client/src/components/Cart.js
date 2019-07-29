import React, { Component } from "react";
import axios from "axios";

class Cart extends Component {

    constructor(){
        super();
        this.state = {
            cart: localStorage.getItem("cart") || [],
            pizzas: [],
        };
    }

    componentDidMount(){
        if(localStorage.getItem("cart")){
            
            axios.get("/pizza")
            .then(res => {
                this.setState({
                    pizzas: res.data.filter(pizza => pizza._id === cart.find(order => order._id))
                })
            })
            .catch(err = console.log(err));
        }
    }

    handleChange = () => {

    }

    checkout = () => {

    }

    increaseCount = _id => {
        this.setState({
            cart: this.state.cart.map(order => {
                if(order._id === _id)
                    return {
                        _id: _id,
                        count: this.state.count + 1
                    }
        }
    )})

        localStorage.setItem("cart", this.state.cart);
    
    }

    decreaseCount = _id => {
        if(cart.indexOf(_id).count > 0)
        this.setState({
            cart: this.state.cart.map(order => {
                if(order._id === _id)
                    return {
                        _id: _id,
                        count: this.state.count - 1
                    }
        }
    )})

        if(cart.indexOf(_id).count <= 0)
            this.setState({
                cart: cart.filter(order => order._id !== _id)
            });

        localStorage.setItem("cart", this.state.cart);
    }

    render(){

        const mappedOrder = pizzas.map(pizza => <div>
                <p>{`${pizza.title} (${this.state.cart.find(order => order._id === pizza._id).count})`}</p>
            </div>);

            return(
                <div>
                    <h1>Your Cart</h1>
                    <div>{mappedOrder}</div>
                    <button onClick={this.checkout}>Proceed To Checkout</button>
                </div>
            );
    }

}

export default Cart;