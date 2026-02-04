const express = require('express');
const routes = express.Router();
const employeeController = require('../controllers/EmployeeController');

routes.post('/add', employeeController.addEmployee);

module.exports = routes;