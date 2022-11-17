const express = require("express");
const { Register } = require("../controllers/student.controller");
const { StudentLogin } = require("../controllers/student.controller");

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login", StudentLogin);

module.exports = routes;