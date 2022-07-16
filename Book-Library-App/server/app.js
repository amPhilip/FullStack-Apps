const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv").config();
const bookRoutes = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db.js");

connectDB();


app.get('/',(req, res) => {
  res.send(`<h3>You have reached the server</h3>`)
})

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", bookRoutes); 

//Listening Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
