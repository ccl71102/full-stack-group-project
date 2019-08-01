import React from "react";
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import Menu from "./components/Menu.js"
import Cart from "./components/Cart.js"
import Checkout from "./components/Checkout.js"
import Order from "./components/Order.js"
import OrderPlaced from "./components/OrderPlaced.js"
import {withPizza} from "./context/PizzaProvider"
import { Switch, Route } from "react-router-dom"
import "./style.css"

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps} {...props}/>}/>
        <Route path="/menu" render={routerProps => <Menu {...routerProps} {...props}/>}/>
        <Route path="/cart" render={routerProps => <Cart {...routerProps} {...props}/>}/>
        <Route path="/order" render={routerProps => <Order {...routerProps} {...props}/>}/>
        <Route path="/checkout" render={routerProps => <Checkout {...routerProps} {...props}/>}/>
        <Route path="/orderplaced" render={routerProps => <OrderPlaced {...routerProps} {...props}/>}/>
      </Switch>
    </div>
  )
}

export default withPizza(App);
