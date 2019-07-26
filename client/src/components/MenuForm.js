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
    }
    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="menuInput" name="priceSort" onChange={this.handleChange} placeholder="input your top price" value={this.state.priceSort}/>
                    <button type="submit">submit</button>
                </form>
        )
    }
}

export default MenuForm