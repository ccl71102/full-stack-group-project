import React, {Component} from "react"

class MenuForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            priceSort: ""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.getAllPizzasByPrice(this.state.priceSort)
    }
    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="menuInput" name="priceSort" onChange={this.handleChange}></input>
                    <button type="submit">submit</button>
                </form>
        )
    }
}

export default MenuForm