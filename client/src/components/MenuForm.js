import React, {Component} from "react"

class MenuForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            priceSort: ""
        }
    }

    handleChange=(e)=>{
        if(e.target.value.indexOf(".") !==-1) {
            if(e.target.value.substring(e.target.value.indexOf(".") + 1).length > 2){
                return;
            }
        }
        if(!isNaN(e.target.value)){
             this.setState({
                [e.target.name]: e.target.value
             })
        }     
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.getAllPizzasByPrice(this.state.priceSort, -1)
        this.setState({
            priceSort: ""
        })
    }
    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <h3 className="formInstruct">To budget input your top price:</h3>
                    <div className="buget">
                        <input type="text" className="menuInput" name="priceSort" onChange={this.handleChange} value={this.state.priceSort} maxLength="5" placeholder="Price (USD)"/>
                        <button className="bugetButton" type="submit">budget!</button>
                    </div>
                </form>
        )
    }
}

export default MenuForm