const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(express.static('./app/public'));

app.get ("/", (req, res)=>{
    res.render("home/index");
})

app.listen(3000, ()=>{
    console.log("Servidor funcionando");
})