const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const budgetRoute = require("./routes/budgetRoutes");
const goalRoute = require("./routes/goalRoutes");

app.use(cors());
app.use(express.json());

//mongoose connection
main()
    .then(() => console.log("connection Successfull"))
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/finance");
}
//Home
app.get("/", (req, res) => {
    res.send("home route");
})

app.use("/api/budgets",budgetRoute);
app.use("/api/goals",goalRoute);

app.listen(5000, () => {
    console.log("Server Running On Port 5000...");
})
