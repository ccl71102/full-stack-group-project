const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 7100

app.use(morgan("dev"));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pizzadb",
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( () => console.log("Fetching ingredients from storage"))
.catch( err => console.log(err));

app.use("/pizza", require("./routes/pizzaRouter.js"));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errorMessage: err.message});
})

app.listen(PORT, () => {
    console.log(`Setting oven to ${PORT} degrees`);
});