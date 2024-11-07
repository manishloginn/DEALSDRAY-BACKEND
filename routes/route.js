const express = require('express')
const { createEmploye, getEmploye } = require('../controlers/createEmploye')
const { login, signup } = require('../controlers/login')
const { editControler } = require('../controlers/editControler')
const deleteControler = require('../controlers/deleteControler')
const route = express.Router()



route.post('/adminLogin', login)
route.post('/adminSignup', signup)
route.post('/createEmploye', createEmploye)
route.get('/getEmploye', getEmploye)
route.post('/editEmployee', editControler)
route.post('/deletEmployee', deleteControler)


module.exports = {route}