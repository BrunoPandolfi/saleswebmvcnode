const app = require('./config/server');

const salesstatus = require('./app/models/enums/SaleStatus');

console.log (salesstatus.CANCELED);

app.listen(3000, ()=>{
    console.log("Servidor funcionando");
})