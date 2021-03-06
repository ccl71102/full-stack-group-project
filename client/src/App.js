import React from "react";
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import Menu from "./components/Menu.js"
import Cart from "./components/Cart.js"
import Checkout from "./components/Checkout.js"
import Order from "./components/Order.js"
import OrderPlaced from "./components/OrderPlaced.js"
import {withPizza} from "./context/PizzaProvider.js"
import { Switch, Route, withRouter } from "react-router-dom"
import Footer from "./components/Footer.js"
import ScrollToTop from "./components/ScrollToTop.js"
import "./style.css"

const Scroll = withRouter(ScrollToTop);

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Scroll>
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps} {...props}/>}/>
          <Route path="/menu" render={routerProps => <Menu {...routerProps} {...props}/>}/>
          <Route path="/cart" render={routerProps => <Cart {...routerProps} {...props}/>}/>
          <Route path="/order" render={routerProps => <Order {...routerProps} {...props}/>}/>
          <Route path="/checkout" render={routerProps => <Checkout {...routerProps} {...props}/>}/>
          <Route path="/orderplaced" render={routerProps => <OrderPlaced {...routerProps} {...props}/>}/>
        </Switch>
      </Scroll>
      <Footer/>
    </div>
  )
}

export default withPizza(App);
