const express = require("express");
const app = express();
app.use(express.json());
const config = require("./config/config.js");
const connectDB = require("./config/db.js");

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})