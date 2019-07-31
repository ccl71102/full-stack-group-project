import React, { Component } from 'react';
import axios from 'axios';

const PizzaContext = React.createContext();

class PizzaProvider extends Component {
    constructor(){
        super();
        this.state = {
            pizzas: []      
        };
    }

    componentDidMount() {
            axios.get("/pizza?size=12")
            .then(res => {
              this.setState({
                pizzas: res.data
              });
            })
            .catch(err => console.log(err));
    }

    getAllPizzas = size => {

        if(size !== "" && size !== "undefined") {
            axios.get(`/pizza?size=${size}`)
            .then(res => {
                this.setState({
                    pizzas: res.data
                });
            })
            .catch(err => console.log(err));
        }
        else {
            axios.get(`/pizza`)
            .then(res => {
                this.setState({
                    pizzas: res.data
                });
            })
            .catch(err => console.log(err));
        }
    }

    getPizzaById = _id => {

        axios.get(`/:${_id}`)
        .then(res => {
            return res.data;
        })
        .catch(err => console.log(err));
    }

    getAllPizzasByPrice = (price, sort) => {

        if((price !== "" || price !== undefined) && (sort !== "" || sort !== "undefined")) {
            axios.get(`/pizza/pricing?price=${price}&sort=${sort}`)
            .then(res => {
                this.setState({
                    pizzas: res.data
                });
            })
            .catch(err => console.log(err));
        } else if(price !== "" || price !== "undefined") {
            axios.get(`/pizza/pricing?price=${price}`)
            .then(res => {
                this.setState({
                    pizzas: res.data
                });
            })
            .catch(err => console.log(err));
        } else if(sort !== "" || sort !== "undefined") {
            axios.get(`/pizza/pricing?sort=${sort}`)
            .then(res => {
                this.setState({
                    pizzas: res.data
                });
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
                        getAllPizzasByPrice: this.getAllPizzasByPrice,
                        getPizzaById: this.getPizzaById
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

