const express = require('express');
const  http = require('http');
const morgan = require('morgan');
const app =  express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>
{
    console.log('i am working');
    res.statusCode = 200;
    res.end();
});

var server = http.createServer(app);


server.listen('8080','localhost',()=>{
    console.log('server has been succesfully created');
});