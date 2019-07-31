import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class OrderInput extends Component {

    constructor(){
        super();
        this.state = {
            ammount: 0
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        if(!isNaN(value) && !value.includes(".")) {
            this.setState({
                [name]: value
            });
        }
    }

    render(){
        return (
                <> 
                    <button className="orderAmont" onClick={() => this.props.increaseCount(this.props._id, this.state.ammount)}><FontAwesomeIcon icon={faPlusCircle}/></button>
                    <input  onChange={this.handleChange} 
                            type="number" 
                            name="ammount" 
                            value={this.state.ammount || ""}
                            placeholder="Ammount To Change"
                            min="0"
                            max="1000000" 
                    />
                    <button className="orderAmont" onClick={() => this.props.decreaseCount(this.props._id, this.state.ammount)}><FontAwesomeIcon icon={faMinusCircle}/></button> 
                </>
        )
    }

}

export default OrderInput;