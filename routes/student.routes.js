const express = require("express");
const { Register } = require("../controllers/student.controller");
const { StudentLogin,getAllStudent } = require("../controllers/student.controller");
const authorization = require("../middlewares/middleware");

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login", StudentLogin);
routes.get("/getstudent", authorization,  getAllStudent);

module.exports = routes;