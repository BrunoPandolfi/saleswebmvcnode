const Sequelize = require ('sequelize');
const dbConfig = require('../../config/database');

const Department = require('../models/Department');
const Seller = require('../models/Seller');
const SalesRecord = require('../models/SalesRecord');

const connection = new Sequelize(dbConfig);

Department.init(connection);
Seller.init(connection);
SalesRecord.init(connection);

module.exports = connection;