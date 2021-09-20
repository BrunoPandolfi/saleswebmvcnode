const Sequelize = require ('sequelize');
const dbConfig = require('../../config/database');

const Department = require('../models/Department');

const connection = new Sequelize(dbConfig);

Department.init(connection);

module.exports = connection;