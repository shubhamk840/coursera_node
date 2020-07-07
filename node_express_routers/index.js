const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const dishRoutes = require('./Routes/dishRoutes');
const promoRouters = require('./Routes/promoRouter');
const leaderroutes = require('./Routes/leaderRouter');
const app = express();
app.use(bodyParser.json());

app.use('/dishes',dishRoutes);
app.use('/promotions',promoRouters);
app.use('/leader',leaderroutes);
const server = http.createServer(app);

server.listen('8080','localhost',()=>{
    console.log('server has been succesfully started');
});