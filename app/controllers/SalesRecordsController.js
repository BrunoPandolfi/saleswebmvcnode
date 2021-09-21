const salestatus = require('../models/enums/SaleStatus');
const SalesRecords = require('../models/SalesRecord');

module.exports = {
    async index(req, res) {
        const sales = await SalesRecords.findAll();
        res.render('salesrecords/index', { sales: sales, page_name: 'salesrecords' });
    },

    async store(req, res) {
        console.log(req.body);
        const {id, date, amount} = req.body;
        var status;
        switch (req.body.status) {
            case "PENDING":
                status = salestatus.PENDING;
                break;
            case "BILLED":
                status = salestatus.BILLED;
                break;
            case "CANCELED":
                status = salestatus.CANCELED;
                break;
        }
        
        const sale = await SalesRecords.create({ id, date, amount, status });
        res.json(sale);
        //res.render('salesrecords/index', { sales: sales, page_name: 'salesrecords' });
    }
}