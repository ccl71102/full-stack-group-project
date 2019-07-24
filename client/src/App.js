import React from "react";
import Home from "./components/Home.js"
import About from "./components/About.js"
import Navbar from "./components/Navbar.js"
import Menu from "./components/Menu.js"
import {withPizza} from "./context/PizzaProvider"
import { Switch, Route } from "react-router-dom"
import "./style.css"



const App = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
        <Route path="/about" render={routerProps => <About {...routerProps}/>}/>
        <Route path="/menu" render={routerProps => <Menu {...routerProps}/>}/>
      </Switch>
    </div>
  )
}

export default withPizza(App);
