import React from "react"
// import axios from "axios"
// import {withPizza} from "../context/PizzaProvider"

const Menu = (props) => {

    
    const mappedPizzas = props.pizzas.map(pizza => <div key={pizza._id}>
            <div style={{backgroundImage: `url(${pizza.imgUrl})`}}>
                <h1>{pizza.title}</h1>
            </div>
        </div>)
        return(
            <div>
                {mappedPizzas}
            </div>
        )
    }


export default Menu