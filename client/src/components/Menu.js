import React from "react"
import MenuFrom from "./MenuForm.js"
// import axios from "axios"
// import {withPizza} from "../context/PizzaProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice} from "@fortawesome/free-solid-svg-icons"
const Menu = (props) => {
    
    const mappedPizzas = props.pizzas.map(pizza => <div key={pizza._id}>
        <h1 className="mappedTitle">{pizza.title}</h1>
            <div className="mappedDiv">
                <div>    
                    <div style={{backgroundImage: `url(${pizza.imgUrl})`}} className="pizzaImg"></div>
                </div>
                <div>
                    <h2 className="mappedDescription">{pizza.description}</h2>
                    <h4 className="mappedSize">{pizza.size} inches / ${pizza.price}</h4>
                    <button className="orderButton">Order Now!</button>
                </div> 
           </div>
        </div>)

        return(
            <div className="menuDiv">
                <div className="menuSorter">
                    <h3 className="menueInstruct">Choose Your Size <FontAwesomeIcon icon={faPizzaSlice} className="sizePiont"/></h3>
                    <button onClick={() => props.getAllPizzas("12")} className="sortButton">Size: 12 inches</button>
                    <button onClick={() => props.getAllPizzas("14")} className="sortButton">Size: 14 inches</button>
                    <button onClick={() => {props.getAllPizzas("16")}} className="sortButton">Size: 16 inches</button>
                    <MenuFrom getAllPizzasByPrice={props.getAllPizzasByPrice} {...props}/>
                </div>
                {mappedPizzas}
            </div>
        )
    }


export default Menu