const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes');

const app = express();
app.use(bodyParser.json());

app.use('/dishes',routes);
const server = http.createServer(app);

server.listen('8080','localhost',()=>{
    console.log('server has been succesfully started');
});