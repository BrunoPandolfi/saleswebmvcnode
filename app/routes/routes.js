const express = require('express');
const departmentController = require ('../controllers/DepartmentController');

const routes = express.Router();

routes.get('/departments', departmentController.index);
routes.post('/departments', departmentController.store);

module.exports = routes;