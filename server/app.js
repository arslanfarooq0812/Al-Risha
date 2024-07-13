const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const Employee = require("./routes/employee.routes");
const Company = require("./routes/company.routes");
const Project = require("./routes/project.routes");
app.use("/api/v1/employee", Employee);
app.use("/api/v1/company", Company);
app.use("/api/v1/project", Project);
module.exports = app;
