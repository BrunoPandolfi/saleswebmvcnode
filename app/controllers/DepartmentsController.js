const Department = require('../models/Department');

module.exports = {
    async index (req, res){
        const departments =  await Department.findAll();
        var colNames = Object.getOwnPropertyNames(departments[0].dataValues);
        res.render('departments/index', {departments: departments, page_name: 'departments', colNames: colNames });
    },

    create (req, res){
        res.render('departments/create', {page_name: 'departments'});
    },

    async store (req, res){
        console.log(req.body);
        const { id, name } = req.body;

        await Department.create({id, name});

        res.redirect("/departments");
    }
}