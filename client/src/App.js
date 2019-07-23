import React from "react";
import Home from "./Home.js"
import About from "./About.js"
import Navbar from "./Navbar.js"
import { Switch, Route } from "react-router-dom"
import Axios from "axios";


const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
        <Route path="/about" render={routerProps => <About {...routerProps}/>}/>
      </Switch>
    </div>
  )
}

export default App;
