const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pizzaSchema = new Schema({
    title: {
        type: String,
        lowercase: true,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    size: {
        type: String,
        enum: ['12', '14', '16'],
        default: '12'
    },
    sauce: {
        type: String,
        enum: ["tomato", "white", "alfredo", "pesto", "bbq", "worcestershire", "buffalo"],
        default: "tomato"
    },
    price: {
        type: Number,
        default: 0.00
    },
    toppings: {
        type: [String],
        enum: ["mozzarella cheese", "feta cheese", "cheddar cheese", "ricotta cheese", "bleu cheese", "goat cheese", "swiss cheese", "romano cheese", "grilled chicken", "bacon", "pepperoni", "ham", "salami", "canadian bacon", "anchovies", "steak", "italian sausage", "meatballs", "anchovies", "tomatoes", "red onions", "onions", "green olives", "black olives", "green peppers", "mushrooms", "spinach", "broccoli", "pineapple", "garlic", "jalapenos", "artichoke hearts", "eggplant"],
        default: "mozzarella cheese"
    },
    imgUrl: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Pizza", pizzaSchema);