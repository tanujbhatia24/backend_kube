const express = require("express");
const { adminRegister, AdminLogin} = require("../controllers/admin.controller");


const routes = express.Router();

routes.post("/adminlogin", AdminLogin);
routes.post("/adminregister", adminRegister);

module.exports = routes;
