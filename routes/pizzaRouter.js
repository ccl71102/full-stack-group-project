const express = require("express")
const pizzaRouter = express()
const Pizza = require("../modules/pizza.js")

pizzaRouter.route("/")
    .get((req,res,next)=>{
        Pizza.find((err, pizza)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(200).send(pizza)
        })
    })
    .post((req,res,next)=>{
        const newPizza = new Schema(req.body)
        newPizza.send((err, savedPizza)=>{
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(savedPizza)
        })
    })



module.exports = pizzaRouter