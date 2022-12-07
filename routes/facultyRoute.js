const express = require("express");
const routes = express.Router();
const faculty = require("../controllers/facultyController");
routes.post("/register", faculty.facultyRegister);
routes.post("/login", faculty.facultyLoginMethod);
routes.get("/getfaculty", faculty.getAllFaculty);
module.exports = routes;

