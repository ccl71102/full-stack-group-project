const express = require("express");
const pizzaRouter = express.Router();
const Pizza = require("../models/pizza.js");

pizzaRouter.get("/", (req, res, next) => {

    Pizza.find((err, pizzas)=>{
        if(err){
            res.status(500);
            next(err);
        } else
            res.status(200).send(pizzas);
    });
});

pizzaRouter.get("/:_id", (req, res, next) => {

    Pizza.findOne({_id: req.params._id}, (err, foundPizza) => {
        if(err) {
            res.status(500);
            next(err);
        } else 
            res.status(200).send(foundPizza);

    });
});

pizzaRouter.post("/", (req, res, next) => {

    const newPizza = new Pizza(req.body);
    newPizza.save((err, savedPizza) => {
        if(err){
            res.status(500);
            next(err);
        } else    
            res.status(201).send(savedPizza);
    });
});

pizzaRouter.put("/:_id", (req, res, next) => {
    Pizza.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body,
        {new: true},
        (err, updatedPizza) => {
            if(err) {
                res.status(500);
                next(err);
            } else
                res.status(201).send(updatedPizza);
        });
});

pizzaRouter.delete("/:_id", (req, res, next) => {
    Pizza.findOneAndRemove({_id: req.params._id}, (err, deletedPizza) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(202).send({
                message: "Pizza has been thrown into trash bin",
                _id: deletedPizza._id
            });
    });
});

module.exports = pizzaRouter