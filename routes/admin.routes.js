const express = require("express");
const { adminRegister } = require("../controllers/admin.controller");
const { AdminLogin } = require("../controllers/adminLogin.controller");

const routes = express.Router();

routes.post("/adminlogin", AdminLogin);
routes.post("/adminregister", adminRegister);

module.exports = routes;
