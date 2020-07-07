const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const dishRoutes = require('./Routes/dishRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/dishes',dishRoutes);
const server = http.createServer(app);

server.listen('8080','localhost',()=>{
    console.log('server has been succesfully started');
});