const express = require('express')
const { Register } = require('../controllers/student.controller')

const routes = express.Router()

routes.post('/register', Register)

module.exports= routes