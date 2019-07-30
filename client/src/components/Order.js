import React, { Component } from "react";
import axios from "axios";

class Order extends Component {

    constructor(){
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            pizzas: [],
            name: localStorage.getItem("name") || "",
            email: localStorage.getItem("email") || "",
            phone: "" //it's a bit trickier with the phone number
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
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("phone", `(${this.state.phone.substring(0,3)}) ${this.state.phone.substring(3,6)}-${this.state.phone.substring(6,10)}`);

        this.setState({
            name: "",
            email: "",
            phone: ""
        }, this.props.history.push("/checkout"))

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
            })
        }, localStorage.setItem("cart", JSON.stringify(this.state.cart)));
        
    }

    decreaseCount = _id => {
    //     if(this.state.cart.indexOf(_id).count > 0)
    //     this.setState({
    //         cart: this.state.cart.map(order => {
    //             if(order._id === _id)
    //                 return {
    //                     _id: _id,
    //                     count: this.state.count - 1
    //                 }
    //     }
    // )})

    //     if(this.state.cart.indexOf(_id).count <= 0)
    //         this.setState({
    //             cart: this.state.cart.filter(order => order._id !== _id)
    //         });

    //     localStorage.setItem("cart", JSON.stringify(this.state.cart));
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
                <button onClick={() => this.increaseCount(pizza._id)}>Add</button>
                <button>Remove</button>
            </div>);

        return(
            <div>
                <h1>Your Order</h1>
                <div>{mappedOrder}</div>
                <form onSubmit={this.handleSubmit}>
                    <input required name="name" value={this.state.name} placeholder="Full Name" onChange={this.handleChange} maxLength="30"/>
                    <input required name="email" value={this.state.email} placeholder="Email Address" maxLength="30" onChange={this.handleChange}/>
                    <input required name="phone" value={this.state.phone} placeholder="Phone Number (555) 555-5555" maxLength="10" onChange={this.handleChange}/>
                    <button>Go To Checkout</button>
                </form>
            </div>
        );
    }
}

export default Order;