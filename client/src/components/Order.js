import React, { Component } from "react";
import axios from "axios";
import OrderInput from "./OrderInput.js";

class Order extends Component {

    constructor(){
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            pizzas: [],
            name: localStorage.getItem("name") || "",
            email: localStorage.getItem("email") || "",
            phone: localStorage.getItem("phone") || ""
        };
    }

    componentDidMount(){
        if(localStorage.getItem("cart")){
            axios.get("/pizza")
            .then(res => {
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

    componentWillUnmount() {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }

    handleChange = e => {
        const {name, value} = e.target;
        if(name === "phone"){
            if(!isNaN(value) && !value.includes("."))
                this.setState({
                    phone: value
                })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = e => {

        e.preventDefault();

        if(this.state.pizzas.length !== 0) {

            localStorage.setItem("name", this.state.name);
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("phone", this.state.phone);

            this.setState({
                name: "",
                email: "",
                phone: ""
            }, this.props.history.push("/checkout"));
        }   else 
            alert("Your cart is currently empty.");   

    }

    handleRoute = route => {
        this.props.history.push(route);
    }

    increaseCount = (_id, ammount) => {
        this.setState({
            cart: this.state.cart.map(order => {
                if(order._id === _id)
                    return ({
                        _id: _id,
                        count: order.count + Number(ammount)
                    })
                else
                    return order        
            }
            )
        }, () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));
    }

    decreaseCount = (_id, ammount) => {
        if(this.state.cart.find(order => order._id === _id).count > 1){
            this.setState(prevState => ({
                cart: prevState.cart.map(order => {
                    if(order._id === _id) {
                        return ({
                            _id: _id,
                            count: order.count - Number(ammount)
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

    removeAll = _id => {
        this.setState({
            cart: this.state.cart.filter(order => order._id !== _id),
            pizzas: this.state.pizzas.filter(pizza => pizza._id !== _id)
        }, () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));
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
                <p>{`${this.getSizeString(pizza.size)} ${pizza.title} (${this.state.cart.find(order => order._id === pizza._id).count})`}{` ($${pizza.price} each)`}<OrderInput 
                    {...pizza} 
                    increaseCount={this.increaseCount}
                    decreaseCount={this.decreaseCount}
                />  
                <button className="orderAmont" onClick={() => this.removeAll(pizza._id)}>Remove All</button>
            </p>
                </div>);

            const subtotal = this.state.pizzas.reduce((total, curr) => total + curr.price * this.state.cart.find(order => order._id === curr._id).count, 0);

        return(
            <div className="orderDiv">
                <h1>Your Order</h1>
                <div>{mappedOrder.length !== 0 ? mappedOrder : <p>There's nothing in your order. Go add some pizzas!</p>}</div>
                <p>{subtotal ? `Subtotal: $${subtotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2})}` : ""}</p>
                <form onSubmit={this.handleSubmit} className="orderForm">
                    <input required name="name" value={this.state.name} placeholder="Full Name" onChange={this.handleChange} maxLength="30" className="formInputs"/>
                    <input type="email" required name="email" value={this.state.email} placeholder="Email Address" maxLength="30" onChange={this.handleChange} className="formInputs"/>
                    <input required name="phone" value={this.state.phone} placeholder="Phone Number" minLength="10" maxLength="10" onChange={this.handleChange} className="formInputs"/>
                    <button className="goToCheckout">{"Go To Checkout"}</button>
                </form>
            </div>
        );
    }
}

export default Order;