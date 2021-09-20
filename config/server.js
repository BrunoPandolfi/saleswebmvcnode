const express = require('express');
const routes = require('../app/routes/routes');
const app = express();

require('../app/database/index');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./app/public'));
app.use(routes);

module.exports = app;