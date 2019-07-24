import React, {Component} from "react"
// import axios from "axios"
import {withPizza} from "../context/PizzaProvider"

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullStack: []
        }
    }
        
    componentDidMount(props){
        this.setState({
            fullStack: this.props.pizzas
        })
        console.log(this.state.fullStack) 
    } 
    
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default withPizza(Menu)