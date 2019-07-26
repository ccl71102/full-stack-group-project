import React from "react"
import MenuFrom from "./MenuForm.js"
// import axios from "axios"
import {withPizza} from "../context/PizzaProvider"

const Menu = (props) => {
    
    const mappedPizzas = props.pizzas.map(pizza => <div key={pizza._id}>
        <h1 className="mappedTitle">{pizza.title}</h1>
            <div className="mappedDiv">
                <div>    
                    <div style={{backgroundImage: `url(${pizza.imgUrl})`}} className="pizzaImg"></div>
                </div>
                <div>
                    <h2 className="mappedDescription">{pizza.description}</h2>
                    <h4 className="mappedSize">'{pizza.size}' / ${pizza.price}</h4>
                 </div> 
                 <button>Order Now!</button>
           </div>
        </div>)

        return(
            <div className="menuDiv">
                <button onClick={() => props.getAllPizzas("12")}>Size: '12'</button>
                <button onClick={() => props.getAllPizzas("14")}>Size: '14'</button>
                <button onClick={() => {props.getAllPizzas("16")}}>Size: '16'</button>
                <MenuFrom getAllPizzasByPrice={props.getAllPizzasByPrice} {...props}/>
                {mappedPizzas}
            </div>
        )
    }


export default Menu