const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./Middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
/*------------Routes----------------*/
const tasksRoutes = require("./Routes/tasksRoutes.js");
const usersRoutes = require("./Routes/userRoutes.js");
/*--------APP----------*/
connectDB();

const app = express();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*-------------ROUTES ENDPOINTS---------*/
app.use("/api/tasks", tasksRoutes);
app.use("/api/users", usersRoutes);

/*------------Error Handling----------*/
app.use(errorHandler);

//Listening Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
