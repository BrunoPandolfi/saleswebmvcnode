const Seller = require('../models/Seller');

module.exports = {
    async index (req, res){
        const sellers =  await Seller.findAll();

        res.render('sellers/index', {sellers: sellers, page_name: 'sellers'});
    },

    async store (req, res){
        console.log(req.body);
        const { id, name, email, birthDate, baseSalary } = req.body;

        const seller = await Seller.create({ id, name, email, birthDate, baseSalary });
        res.json(seller);
        //res.render('sellers/index', {sellers: seller, page_name: 'sellers'});
    }
}