const express = require("express");
const routes = express.Router();
const faculty = require("../controllers/facultyController");
routes.post("/register", faculty.facultyRegister);
module.exports = routes;

