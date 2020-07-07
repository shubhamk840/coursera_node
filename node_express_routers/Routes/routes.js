const express = require('express');
const bodyparser = require('body-parser');
const routes = express.Router();
routes.use(bodyparser.json());
routes.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('Dont worry we will send all the dishes to you shortly');

}).post((req,res,next)=>{
    res.end('Will add the dishes: '+ req.body.name + ' with discription '+ req.body.discription);
}).put((req,res,next)=>{
    res.statusCode =403;
    res.end('Put operaton can not be performed');
}).delete((req,res,next)=>{
    res.statusCode = 403;
    res.end('Deleting all the dishes');
});

module.exports = routes;


