import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import PizzaProvider from './context/PizzaProvider.js'

ReactDOM.render(
<BrowserRouter>
    <App />,
</BrowserRouter>, 
document.getElementById("root"));

