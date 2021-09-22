const Seller = require('../models/Seller');
const Department = require('../models/Department');
const moment = require ('moment');
const { Sequelize } = require('sequelize');

module.exports = {
    async index (req, res){
        const sellers =  await Seller.findAll();
        var colNames = Object.getOwnPropertyNames(sellers[0].dataValues);   
        res.render('sellers/index', {sellers: sellers, page_name: 'sellers', colNames: colNames, moment: moment});
    },

    async create (req, res){
        const departments = await Department.findAll({ order: [['name', 'ASC']]});
        //console.log(departments.values);
        res.render('sellers/create', {page_name: 'sellers', departments: departments});
    },

    async store (req, res){
        const { name, email, birthDate, baseSalary, departmentId } = req.body;

        console.log(req.body);

        var baseSalaryNum = Number(baseSalary);
        //var codDep = 1;
        
       
        await Seller.create({ name, email, birthDate, baseSalary: baseSalaryNum, departmentId});
        res.redirect("/sellers");
    }
}