const express = require('express');
const departmentsController = require ('../controllers/DepartmentsController');
const sellersController = require('../controllers/SellersController');
const salesController = require('../controllers/SalesRecordsController');

const routes = express.Router();
routes.get('/', (req, res)=>{
    res.render('home/index', { page_name: 'home'});
});
routes.get('/departments', departmentsController.index);
routes.get('/departments/create', departmentsController.create);
routes.post('/departments/create', departmentsController.store);
routes.get('/sellers', sellersController.index);
routes.post('/sellers', sellersController.store);
routes.get('/salesrecord', salesController.index);
routes.post('/salesrecord', salesController.store);

module.exports = routes;