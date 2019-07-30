const express = require("express");
const app = express();
const path = require("path")
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 7100

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect("mongodb://localhost:27017/oven",
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Setting oven to ${PORT} degrees`);
});