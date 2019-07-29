import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                    pizzas: res.data.filter(pizza => pizza._id === this.state.cart.find(order => order._id))
                })
            })
            .catch(err => console.log(err));
        }
    }

    handleChange = () => {
        
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
        if(this.state.cart.indexOf(_id).count > 0)
        this.setState({
            cart: this.state.cart.map(order => {
                if(order._id === _id)
                    return {
                        _id: _id,
                        count: this.state.count - 1
                    }
        }
    )})

        if(this.state.cart.indexOf(_id).count <= 0)
            this.setState({
                cart: this.state.cart.filter(order => order._id !== _id)
            });

        localStorage.setItem("cart", this.state.cart);
    }

    render(){

        const mappedOrder = this.state.pizzas.map(pizza => <div>
                <p>{`${pizza.title} (${this.state.cart.find(order => order._id === pizza._id).count})`}</p>
                <button>Add</button>
                <button>Remove</button>
            </div>);

            return(
                <div>
                    <h1>Your Cart</h1>
                    <div>{mappedOrder}</div>
                    <button><Link to="/checkout">Proceed To Checkout</Link></button>
                </div>
            );
    }

}

export default Cart;