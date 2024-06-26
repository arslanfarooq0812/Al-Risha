const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const Employee = require("./routes/employee.routes");

app.use("/api/v1/employee", Employee);

module.exports = app;
