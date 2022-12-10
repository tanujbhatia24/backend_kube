const express = require("express");

const routes = express.Router();

const careerService  = require("../controllers/careerService.controller");




routes.post("/register", careerService.careerServiceRegister);
routes.post("/login", careerService.careerServiceLogin);
routes.get("/getcareer", careerService.getAllCareerServices);
module.exports = routes;