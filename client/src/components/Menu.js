import React from "react"
// import axios from "axios"
// import {withPizza} from "../context/PizzaProvider"

const Menu = (props) => {

    
    const mappedPizzas = props.pizzas.map(pizza => <div key={pizza._id}>
        
            <div>
                <div style={{backgroundImage: `url(${pizza.imgUrl})`}} className="pizzaImg"></div>
                <h1>{pizza.title}</h1>
            </div>
        </div>)

        return(
            <div>
                <button onClick={() => props.getAllPizzas("12")}>Size: '12'</button>
                <button onClick={() => props.getAllPizzas("14")}>Size: '14'</button>
                <button onClick={() => {props.getAllPizzas("16")}}>Size: '16'</button>
                {mappedPizzas}
            </div>
        )
    }


export default Menu