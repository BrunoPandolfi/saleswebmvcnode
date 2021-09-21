const Seller = require('../models/Seller');
const moment = require ('moment');

module.exports = {
    async index (req, res){
        const sellers =  await Seller.findAll();
        var colNames = Object.getOwnPropertyNames(sellers[0].dataValues);   
        res.render('sellers/index', {sellers: sellers, page_name: 'sellers', colNames: colNames, moment: moment});
    },

    async store (req, res){
        console.log(req.body);
        const { id, name, email, birthDate, baseSalary } = req.body;

        const seller = await Seller.create({ id, name, email, birthDate, baseSalary });
        res.json(seller);
        //res.render('sellers/index', {sellers: seller, page_name: 'sellers'});
    }
}