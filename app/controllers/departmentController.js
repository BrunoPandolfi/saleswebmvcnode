const Department = require('../models/Department');

module.exports = {
    async index (req, res){
        const departments =  await Department.findAll();

        return res.json(departments);
    },

    async store (req, res){
        console.log(req.body);
        const { id, name } = req.body;

        const department = await Department.create({id, name});
        return res.json(department);
    }
}