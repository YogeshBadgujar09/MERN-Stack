const express = require("express");
const routes = express.Router();
const OwnerController = require('../controller/OwnerController/OwnerController');

routes.post('/register', OwnerController.registerOwner);

module.exports = routes;