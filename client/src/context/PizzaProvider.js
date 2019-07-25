import React, { Component } from 'react';
import axios from 'axios';

const PizzaContext = React.createContext ()

class PizzaProvider extends Component {
    constructor(){
        super();
        this.state = {
            pizzas: []      
        } 
    }

    componentDidMount () {
            axios.get("/pizza?size=12")
            .then(res => {
              console.log(res.data);
              this.setState({
                pizzas: res.data
              })
            })
            .catch(err => console.log(err));
    }

    getAllPizzas = size => {

        if(size !== "") {
            axios.get(`/pizza?size=${size}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pizzas: res.data
                })
            })
            .catch(err => console.log(err));
        }
        else {
            axios.get(`/pizza`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pizzas: res.data
                })
            })
            .catch(err => console.log(err));
        }
    }

    getAllPizzasByPrice = (price, sort) => {

        if(price !== "" && sort !== "") {
            axios.get(`/pricing?price=${price}&sort=${sort}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pizzas: res.data
                })
            })
            .catch(err => console.log(err));
        } else if(price !== "") {
            axios.get(`/pricing?price=${price}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pizzas: res.data
                })
            })
            .catch(err => console.log(err));
        } else if(sort !== "") {
            axios.get(`/pricing?sort=${sort}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pizzas: res.data
                })
            })
            .catch(err => console.log(err));
        }

    }

    render(){
        return (
            <PizzaContext.Provider value = {
                    {
                        pizzas: this.state.pizzas,
                        getAllPizzas: this.getAllPizzas,
                        getAllPizzasByPrice: this.getAllByPrice
                    }
                }>
                { this.props.children }
            </PizzaContext.Provider>
        );
    }
}

export const withPizza = Component => props => (

        <PizzaContext.Consumer>
            {value => <Component {...value} {...props}/> }
        </PizzaContext.Consumer>
);

export default PizzaProvider;

