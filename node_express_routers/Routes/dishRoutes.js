const express = require('express');
const bodyparser = require('body-parser');
const dishRoutes= express.Router();
dishRoutes.use(bodyparser.json());
dishRoutes.route('/')
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

dishRoutes.route('/:dishid')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('we will send all the details regarding '+ req.params.dishid +' to you');
}).put((req,res,next)=>{
    res.send('this is not supported for this');
}).post((req,res,next)=>{
    res.send('we will update the query regarding '+ req.params.dishid + ' with '+ 
    req.body.name +' and discription '+req.body.discription);
});

module.exports = dishRoutes;


