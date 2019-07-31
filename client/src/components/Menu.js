import React from "react"
import MenuFrom from "./MenuForm.js"
// import axios from "axios"
// import {withPizza} from "../context/PizzaProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice} from "@fortawesome/free-solid-svg-icons"
const Menu = (props) => {

    const addToCart = (_id) => {

        if(localStorage.getItem("cart")) {
            if(JSON.parse(localStorage.getItem("cart")).find(order => order._id === _id)) {
                let cart = JSON.parse(localStorage.getItem("cart"));
                let itemToUpdate = JSON.parse(localStorage.getItem("cart")).find(order => order._id === _id);
                itemToUpdate.count++;
                cart = cart.filter(order => order._id !== _id);
                cart.push(itemToUpdate);
                localStorage.setItem("cart", JSON.stringify(cart));

            } else {
                const cart = JSON.parse(localStorage.getItem("cart"));
                cart.push({_id: _id, count: 1});
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        } else {
            const cart = [];
            cart.push({_id: _id, count: 1});
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    const orderPizza = _id => {
        addToCart(_id);
        props.history.push("/order");
    }
    
    const mappedPizzas = props.pizzas.map(pizza => <div key={pizza._id}>
        <h1 className="mappedTitle">{pizza.title}</h1>
            <div className="mappedDiv">
                <div>    
                    <div style={{backgroundImage: `url(${pizza.imgUrl})`}} className="pizzaImg"></div>
                </div>
                <div>
                    <h2 className="mappedDescription">{pizza.description}</h2>
                    <h4 className="mappedSize">{pizza.size} inches / ${pizza.price}</h4>
                        
                        <div className="menuOrderButton">
                            <button className="orderButton" onClick={() => orderPizza(pizza._id)}>Order Now!</button> 
                            {/* <span className="spacerText">or</span> */}
                            <button className="addToCart" onClick={() => addToCart(pizza._id)}>Add To Cart!</button>
                        </div>
                        
                </div> 
           </div>
        </div>)

        return(
            <div className="menuDiv">
                <div className="menuSorter">
                    <MenuFrom getAllPizzasByPrice={props.getAllPizzasByPrice} {...props}/>
                    <h3 className="menueInstruct">Choose Your Size <FontAwesomeIcon icon={faPizzaSlice} className="sizePiont"/></h3>
                    <div className="sizeSortDiv">
                        <button onClick={() => props.getAllPizzas("12")} className="sortButton">Size: 12 inches</button>
                        <button onClick={() => props.getAllPizzas("14")} className="sortButton">Size: 14 inches</button>
                        <button onClick={() => {props.getAllPizzas("16")}} className="sortButton">Size: 16 inches</button>
                    </div>
                </div>
                {/* <div className="menuGrid"> */}
                <div className={mappedPizzas.length !== 0 ? "menuGrid" : "noResults"}>
                    {mappedPizzas.length !== 0 ? mappedPizzas : <p>There are no results to display. Please refresh the page and try again.</p>}
                </div>
            </div>
        )
    }


export default Menu