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
        axios.get("/pizza")
          .then(res => {
            console.log(res.data);
            this.setState({
              pizzas: res.data
            })
          })
          .catch(err => console.log(err));
      }

    render(){
        return (
            <PizzaContext.Provider value={{pizzas: this.state.pizzas}}>
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

