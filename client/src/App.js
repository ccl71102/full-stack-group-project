import React from "react";
import Home from "./components/Home.js"
import About from "./components/About.js"
import Navbar from "./components/Navbar.js"
import { Switch, Route } from "react-router-dom"



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
