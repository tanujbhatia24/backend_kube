const express = require("express");

const routes = express.Router();

const careerService  = require("../controllers/careerService.controller");




routes.post("/register", careerService.careerServiceRegister);
routes.post("/login", careerService.careerServiceLogin);

module.exports = routes;